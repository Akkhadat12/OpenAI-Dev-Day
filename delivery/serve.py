#!/usr/bin/env python3
"""Loopback static server for the OpenAI Dev Day local package.

Python 3 standard library only. Binds 127.0.0.1 and never 0.0.0.0.
"""
from __future__ import annotations

import argparse
import json
import mimetypes
import os
import signal
import socket
import sys
import time
import urllib.request
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

PROJECT_ID = "20261003-b4fb"
PACKAGE_VERSION = "1.0.1"
BIND_HOST = "127.0.0.1"
DEFAULT_PORT = 8765
PORT_SPAN = 100

mimetypes.add_type("font/woff2", ".woff2")
mimetypes.add_type("image/svg+xml", ".svg")


def command_line(pid: int) -> str:
    if os.name == "nt":
        script = (
            "(Get-CimInstance Win32_Process -Filter "
            f"\"ProcessId={int(pid)}\").CommandLine"
        )
        import subprocess

        completed = subprocess.run(
            ["powershell", "-NoProfile", "-Command", script],
            capture_output=True,
            text=True,
            timeout=15,
        )
        return completed.stdout or ""
    raw_path = Path(f"/proc/{pid}/cmdline")
    if not raw_path.exists():
        return ""
    return raw_path.read_bytes().replace(b"\x00", b" ").decode("utf-8", "replace")


def pid_alive(pid: int) -> bool:
    if pid <= 0:
        return False
    if os.name != "nt":
        stat = Path(f"/proc/{pid}/stat")
        if not stat.exists():
            return False
        # comm can contain spaces; the state character follows the final ")".
        state = stat.read_text(encoding="utf-8").rsplit(")", 1)[-1].split()[0]
        return state not in {"Z", "X"}
    try:
        os.kill(pid, 0)
    except OSError:
        return False
    return True


def read_state(path: Path) -> dict | None:
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return None
    if not isinstance(data, dict):
        return None
    return data


def status_matches(data: dict, app_dir: Path) -> bool:
    url = str(data.get("url") or "")
    token = str(data.get("token") or "")
    if not url or not token:
        return False
    try:
        with urllib.request.urlopen(url + "__package__/status", timeout=0.6) as response:
            body = json.loads(response.read().decode("utf-8"))
    except (OSError, json.JSONDecodeError, ValueError):
        return False
    return (
        body.get("token") == token
        and body.get("projectId") == PROJECT_ID
        and body.get("packageVersion") == PACKAGE_VERSION
        and Path(str(body.get("app") or "")).resolve() == app_dir.resolve()
    )


def write_state(path: Path, payload: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(".json.tmp")
    temporary.write_text(json.dumps(payload, indent=2), encoding="utf-8")
    temporary.replace(path)
    url_path = path.with_name("server.url")
    url_path.write_text(str(payload["url"]), encoding="utf-8")


def remove_state(path: Path) -> None:
    for candidate in (path, path.with_name("server.url")):
        try:
            candidate.unlink()
        except FileNotFoundError:
            pass


class PackageHandler(SimpleHTTPRequestHandler):
    server_version = "DevDayLocal/1.0"
    token = ""
    app_dir = ""

    def do_GET(self) -> None:  # noqa: N802
        path = self.path.split("?", 1)[0]
        if path == "/__package__/status":
            body = json.dumps(
                {
                    "ok": True,
                    "projectId": PROJECT_ID,
                    "packageVersion": PACKAGE_VERSION,
                    "token": type(self).token,
                    "app": type(self).app_dir,
                    "bind": BIND_HOST,
                }
            ).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Cache-Control", "no-store")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        super().do_GET()

    def list_directory(self, path: str):  # noqa: ANN001
        self.send_error(404, "Not found")
        return None

    def log_message(self, fmt: str, *args) -> None:
        sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))


def pick_port(start: int) -> int:
    for port in range(start, start + PORT_SPAN):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as probe:
            probe.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            try:
                probe.bind((BIND_HOST, port))
            except OSError:
                continue
            return port
    raise SystemExit(f"No free port on {BIND_HOST} in {start}-{start + PORT_SPAN - 1}")


def serve(app_dir: Path, state_path: Path, port_start: int) -> int:
    app_dir = app_dir.resolve()
    if not (app_dir / "index.html").is_file():
        print(f"Missing index.html in {app_dir}", file=sys.stderr)
        return 1
    existing = read_state(state_path)
    if existing and status_matches(existing, app_dir):
        print(f"READY {existing['url']}", flush=True)
        return 0

    token = os.urandom(16).hex()
    PackageHandler.token = token
    PackageHandler.app_dir = str(app_dir)
    handler = partial(PackageHandler, directory=str(app_dir))
    port = pick_port(port_start)
    try:
        httpd = ThreadingHTTPServer((BIND_HOST, port), handler)
    except OSError as error:
        print(f"Could not bind {BIND_HOST}:{port}: {error}", file=sys.stderr)
        return 1
    if httpd.server_address[0] != BIND_HOST:
        httpd.server_close()
        print("Refusing a non-loopback bind", file=sys.stderr)
        return 1
    url = f"http://{BIND_HOST}:{port}/"
    write_state(
        state_path,
        {
            "pid": os.getpid(),
            "port": port,
            "url": url,
            "token": token,
            "projectId": PROJECT_ID,
            "packageVersion": PACKAGE_VERSION,
            "app": str(app_dir),
        },
    )
    print(f"READY {url}", flush=True)
    try:
        httpd.serve_forever()
    finally:
        httpd.server_close()
        remove_state(state_path)
    return 0


def owned_process(pid: int, app_dir: Path) -> bool:
    line = command_line(pid)
    if "serve.py" not in line or PROJECT_ID not in line:
        return False
    resolved = str(app_dir.resolve())
    variants = {resolved, resolved.replace("\\", "/"), resolved.replace("/", "\\")}
    return any(variant and variant in line for variant in variants)


def stop(state_path: Path) -> int:
    data = read_state(state_path)
    if not data:
        print("No package server state.", flush=True)
        return 0
    pid = int(data.get("pid") or 0)
    app_dir = Path(str(data.get("app") or "."))
    if not pid_alive(pid):
        remove_state(state_path)
        print("Package server was not running.", flush=True)
        return 0
    if not owned_process(pid, app_dir):
        print("Refusing to stop a process that is not this package server.", file=sys.stderr)
        return 2
    os.kill(pid, signal.SIGTERM)
    for _ in range(50):
        if not pid_alive(pid):
            remove_state(state_path)
            print(f"Stopped package server pid {pid}.", flush=True)
            return 0
        time.sleep(0.1)
    print(f"Package server pid {pid} did not exit.", file=sys.stderr)
    return 1


def status_code(state_path: Path, app_dir: Path) -> int:
    data = read_state(state_path)
    if data and status_matches(data, app_dir.resolve()):
        print(data["url"], flush=True)
        return 0
    return 1


def relaunch_with_absolute_app() -> None:
    """Re-exec --serve so the live command line carries an absolute --app.

    --stop accepts a process only when that command line contains the resolved
    app directory. A relative --app never matches. Launchers pass an absolute
    path; this covers a direct relative --app the same way.
    """
    if "--stop" in sys.argv or "--status" in sys.argv:
        return
    try:
        index = sys.argv.index("--app")
    except ValueError:
        return
    if index + 1 >= len(sys.argv):
        return
    given = sys.argv[index + 1]
    if Path(given).is_absolute():
        return
    argv = list(sys.argv)
    argv[index + 1] = str(Path(given).resolve())
    os.execv(sys.executable, [sys.executable, *argv])


def main() -> int:
    relaunch_with_absolute_app()
    parser = argparse.ArgumentParser(description="Serve the local DevDay package on 127.0.0.1")
    parser.add_argument("--app", required=True, help="Path to the app directory")
    parser.add_argument("--state", required=True, help="Path to the package server state file")
    parser.add_argument("--port", type=int, default=DEFAULT_PORT)
    parser.add_argument("--project", default=PROJECT_ID)
    parser.add_argument("--version", default=PACKAGE_VERSION)
    parser.add_argument("--host", default=BIND_HOST)
    group = parser.add_mutually_exclusive_group()
    group.add_argument("--serve", action="store_true")
    group.add_argument("--stop", action="store_true")
    group.add_argument("--status", action="store_true")
    args = parser.parse_args()
    if args.host != BIND_HOST:
        print("This helper binds 127.0.0.1 only.", file=sys.stderr)
        return 2
    if args.project != PROJECT_ID or args.version != PACKAGE_VERSION:
        print("Project id or package version does not match this helper.", file=sys.stderr)
        return 2
    app_dir = Path(args.app)
    state_path = Path(args.state)
    if args.stop:
        return stop(state_path)
    if args.status:
        return status_code(state_path, app_dir)
    return serve(app_dir, state_path, args.port)


if __name__ == "__main__":
    raise SystemExit(main())
