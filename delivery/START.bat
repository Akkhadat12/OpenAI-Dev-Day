@echo off
setlocal EnableExtensions
chcp 65001 >nul
cd /d "%~dp0"

set "ROOT=%~dp0"
set "APP=%ROOT%app"
set "STATE=%ROOT%.run\server.json"
set "URLFILE=%ROOT%.run\server.url"
set "LOG=%ROOT%.run\server.log"

if not exist "%ROOT%.run" mkdir "%ROOT%.run"

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
  echo ติดตั้งครั้งเดียวจาก https://www.python.org/downloads/ แล้วเลือก Add python.exe to PATH
  echo Install Python 3 once from https://www.python.org/downloads/ and enable Add python.exe to PATH.
  echo จากนั้นเปิด START.bat อีกครั้ง / Then run START.bat again.
  pause
  exit /b 1
)

%PY_CMD% "%ROOT%serve.py" --status --app "%APP%" --state "%STATE%" --project 20261003-b4fb --version 1.0.1 >nul 2>&1
if %ERRORLEVEL%==0 goto openbrowser

start "OpenAI Dev Day local" /MIN %PY_CMD% "%ROOT%serve.py" --serve --app "%APP%" --state "%STATE%" --project 20261003-b4fb --version 1.0.1 --host 127.0.0.1

set /a TRIES=0
:waitloop
if exist "%URLFILE%" goto openbrowser
set /a TRIES+=1
if %TRIES% GEQ 40 goto notready
ping -n 2 127.0.0.1 >nul
goto waitloop

:notready
echo เซิร์ฟเวอร์ยังไม่พร้อม / The local server did not become ready.
echo ดูบันทึกถ้ามี: "%LOG%"
echo ถ้าพอร์ตถูกใช้ สคริปต์จะเลือกพอร์ตถัดไปบน 127.0.0.1 เองเมื่อเริ่มได้
pause
exit /b 1

:openbrowser
set "URL="
set /p URL=<"%URLFILE%"
if not defined URL (
  echo ไม่พบที่อยู่ของเซิร์ฟเวอร์ / Server URL was not recorded.
  pause
  exit /b 1
)
start "" "%URL%"
exit /b 0
