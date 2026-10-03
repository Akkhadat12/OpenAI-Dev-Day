#!/bin/bash
# macOS stopper for the OpenAI Dev Day local package.
# Passes the absolute app path. serve.py --stop still signals a process only
# when the command line is this package's serve.py.

ROOT="$(cd "$(dirname "$0")" && pwd -P)" || exit 1
cd "$ROOT" || exit 1
APP="${ROOT}/app"
STATE="${ROOT}/.run/server.json"
PROJECT="20261003-b4fb"
VERSION="1.0.1"

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
  if [ "$(uname -s)" = "Darwin" ] && [ -t 0 ]; then
    printf '%s\n' "กด Enter เพื่อปิด / Press Enter to close."
    read -r _
  fi
  exit 1
fi

"$PY" "${ROOT}/serve.py" --stop --app "$APP" --state "$STATE" --project "$PROJECT" --version "$VERSION"
exit $?
