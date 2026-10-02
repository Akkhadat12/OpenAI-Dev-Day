#!/usr/bin/env python3
"""Assemble the prebuilt LOCAL_ZIP from the repository source.

The archive hash is printed after the zip is closed. It is not stored inside the zip.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import zipfile
from pathlib import Path

PROJECT_ID = "20261003-b4fb"
PACKAGE_VERSION = "1.0.0"
ROOT_NAME = f"{PROJECT_ID}-{PACKAGE_VERSION}-local"
ZIP_TIME = (2026, 10, 3, 2, 40, 0)


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def copy_file(source: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(source.read_bytes())


def build_tree(repo: Path, stage: Path, commit: str) -> Path:
    package_root = stage / ROOT_NAME
    if package_root.exists():
        raise SystemExit(f"Stage already exists: {package_root}")
    app = package_root / "app"
    for name in ("index.html", "styles.css", "app.js", "scenes.js"):
        copy_file(repo / "src" / name, app / name)
    asset_root = repo / "assets"
    for path in asset_root.rglob("*"):
        if not path.is_file() or path.suffix == ".md":
            continue
        relative = path.relative_to(asset_root)
        if not relative.parts or relative.parts[0] not in {"cover", "fonts"}:
            continue
        copy_file(path, app / "assets" / relative)
    for name in ("START.bat", "STOP.bat", "serve.py", "README_TH.md"):
        copy_file(repo / "delivery" / name, package_root / name)
    files = sorted(
        path.relative_to(package_root).as_posix()
        for path in package_root.rglob("*")
        if path.is_file()
    )
    manifest = {
        "PROJECT_ID": PROJECT_ID,
        "PACKAGE_VERSION": PACKAGE_VERSION,
        "BUILD_COMMIT": commit,
        "LOCAL_RUNTIME": "Python 3",
        "SERVER_BIND": "127.0.0.1",
        "files": [{"path": item, "sha256": sha256(package_root / item)} for item in files],
    }
    manifest_path = package_root / "manifest.json"
    manifest_path.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    return package_root


def zip_package(package_root: Path, destination: Path) -> str:
    destination.parent.mkdir(parents=True, exist_ok=True)
    if destination.exists():
        destination.unlink()
    with zipfile.ZipFile(destination, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        paths = sorted(path for path in package_root.rglob("*") if path.is_file())
        for path in paths:
            info = zipfile.ZipInfo(str(Path(ROOT_NAME) / path.relative_to(package_root)).replace("\\", "/"))
            info.date_time = ZIP_TIME
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o644 << 16
            archive.writestr(info, path.read_bytes())
    return sha256(destination)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--commit", required=True)
    parser.add_argument("--repo", default=".")
    parser.add_argument("--output", required=True)
    args = parser.parse_args()
    commit = args.commit.strip()
    if len(commit) < 7:
        raise SystemExit("BUILD_COMMIT is missing")
    repo = Path(args.repo).resolve()
    stage = Path(os.environ.get("TMPDIR", "/tmp")) / f"devday-stage-{commit[:12]}"
    if stage.exists():
        import shutil

        shutil.rmtree(stage)
    stage.mkdir(parents=True)
    package_root = build_tree(repo, stage, commit)
    digest = zip_package(package_root, Path(args.output).resolve())
    print(f"PACKAGE_PATH {args.output}")
    print(f"PACKAGE_SHA256 {digest}")
    print(f"STAGE {package_root}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
