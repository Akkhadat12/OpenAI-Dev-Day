@echo off
setlocal EnableExtensions
chcp 65001 >nul
cd /d "%~dp0"

set "ROOT=%~dp0"
set "APP=%ROOT%app"
set "STATE=%ROOT%.run\server.json"

set "PY_CMD="
where py >nul 2>&1
if %ERRORLEVEL%==0 (
  py -3 -c "import sys; raise SystemExit(0 if sys.version_info>=(3, 8) else 1)" >nul 2>&1
  if %ERRORLEVEL%==0 set "PY_CMD=py -3"
)
if not defined PY_CMD (
  where python >nul 2>&1
  if %ERRORLEVEL%==0 (
    python -c "import sys; raise SystemExit(0 if sys.version_info>=(3, 8) else 1)" >nul 2>&1
    if %ERRORLEVEL%==0 set "PY_CMD=python"
  )
)
if not defined PY_CMD (
  echo ไม่พบ Python 3 / Python 3 was not found.
  echo ติดตั้งจาก https://www.python.org/downloads/ แล้วเลือก Add python.exe to PATH
  pause
  exit /b 1
)

%PY_CMD% "%ROOT%serve.py" --stop --app "%APP%" --state "%STATE%" --project 20261003-b4fb --version 1.0.1
exit /b %ERRORLEVEL%
