#!/bin/bash
# macOS launcher for the OpenAI Dev Day local package.
# The working directory of a double-clicked .command file is not the package
# folder, so every path is resolved from this file. Spaces and Thai characters
# stay quoted. Ordinary launch does not install packages or download files.

ROOT="$(cd "$(dirname "$0")" && pwd -P)" || exit 1
cd "$ROOT" || exit 1
APP="${ROOT}/app"
STATE="${ROOT}/.run/server.json"
URLFILE="${ROOT}/.run/server.url"
LOG="${ROOT}/.run/server.log"
PROJECT="20261003-b4fb"
VERSION="1.0.1"

mkdir -p "${ROOT}/.run"

pause_on_mac_failure() {
  if [ "$(uname -s)" = "Darwin" ] && [ -t 0 ]; then
    printf '%s\n' "กด Enter เพื่อปิด / Press Enter to close."
    read -r _
  fi
}

PY=""
for candidate in python3 python; do
  if command -v "$candidate" >/dev/null 2>&1; then
    if "$candidate" -c 'import sys; raise SystemExit(0 if sys.version_info >= (3, 8) else 1)' >/dev/null 2>&1; then
      PY="$candidate"
      break
    fi
  fi
done

if [ -z "$PY" ]; then
  printf '%s\n' "ไม่พบ Python 3 / Python 3 was not found."
  printf '%s\n' "ติดตั้ง Python 3 จาก https://www.python.org/downloads/ แล้วให้ python3 อยู่ใน PATH"
  printf '%s\n' "Install Python 3 from https://www.python.org/downloads/ and put python3 on PATH."
  printf '%s\n' "จากนั้นเปิด START.command อีกครั้ง / Then run START.command again."
  pause_on_mac_failure
  exit 1
fi

if "$PY" "${ROOT}/serve.py" --status --app "$APP" --state "$STATE" --project "$PROJECT" --version "$VERSION" >/dev/null 2>&1; then
  :
else
  # nohup keeps this package server alive after Terminal closes the .command window.
  nohup "$PY" "${ROOT}/serve.py" --serve --app "$APP" --state "$STATE" --project "$PROJECT" --version "$VERSION" --host 127.0.0.1 >>"$LOG" 2>&1 &
  tries=0
  while [ ! -s "$URLFILE" ]; do
    tries=$((tries + 1))
    if [ "$tries" -ge 40 ]; then
      printf '%s\n' "เซิร์ฟเวอร์ยังไม่พร้อม / The local server did not become ready."
      printf '%s\n' "ดูบันทึกถ้ามี: ${LOG}"
      printf '%s\n' "ถ้าพอร์ตถูกใช้ สคริปต์จะเลือกพอร์ตถัดไปบน 127.0.0.1 เองเมื่อเริ่มได้"
      pause_on_mac_failure
      exit 1
    fi
    sleep 0.5
  done
fi

URL=""
IFS= read -r URL <"$URLFILE" || URL=""
if [ -z "$URL" ]; then
  printf '%s\n' "ไม่พบที่อยู่ของเซิร์ฟเวอร์ / Server URL was not recorded."
  pause_on_mac_failure
  exit 1
fi

case "$URL" in
  http://127.0.0.1:*) ;;
  *)
    printf '%s\n' "ปฏิเสธที่อยู่ที่ไม่ใช่ 127.0.0.1 / Refusing a non-loopback URL."
    pause_on_mac_failure
    exit 1
    ;;
esac

if [ "$(uname -s)" = "Darwin" ]; then
  open "$URL"
else
  # A non-macOS shell can execute this file. That run is not a macOS double-click.
  printf '%s\n' "$URL"
fi
exit 0
