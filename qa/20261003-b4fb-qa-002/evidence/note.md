# Evidence note — 20261003-b4fb-qa-002

Independent package 1.0.1 check. This note records that run. It does not re-execute the 1.0.0 scene walk.

## Archive

- Drive file `1cS_V9h8N2exv4E795pQwXsiLFRXI0fJ2`
- Title `20261003-b4fb-1.0.1-local.zip`
- Parent `1QU7tkNth3-1W_4fPvptXqqck6OY2v3yy`
- Size 74400 bytes
- Independently downloaded SHA-256 `5fef0f0836bb53db4baea5f4e5404854a8876354fa3d58e77f28a9f1b6fb31c6` matches status
- Manifest `BUILD_COMMIT` `5d8ac162f8573ef6312c97571238a996c3fec3e8`
- Manifest `PACKAGE_VERSION` `1.0.1`
- Every file hash listed in the manifest matched the clean extract

ZIP unix mode for `START.command` and `STOP.command` is 0755 (`create_system` Unix). Python `zipfile` extract on this Linux host wrote those files as 0644. Bash was invoked explicitly. Missing `+x` after a Python extract is not a defect.

## Linux bash of the extracted .command files

Host was Linux. `uname` was not Darwin. Working directory was `/tmp`, not the package folder. Python was 3.13.5.

- `bash START.command` exited 0 and printed `http://127.0.0.1:8765/`
- State app path was absolute. Process command line contained that absolute `--app`, `--host 127.0.0.1`, and `--version 1.0.1`
- `GET /` returned 200, 13672 bytes, `lang=en`
- A second `bash START.command` exited 0 and reused the same URL
- `bash STOP.command` exited 0 and printed `Stopped package server`. The state file was removed. The pid was dead
- `serve.py --host 0.0.0.0` exited 2 and printed `This helper binds 127.0.0.1 only.`

## Not executed

- macOS Finder, Terminal.app, and `open(1)`
- Windows `START.bat` and `STOP.bat`
- Owner smoke

`MACOS_LAUNCHER_TEST_RESULT=NOT_RUN`. `WINDOWS_LAUNCHER_TEST_RESULT=NOT_RUN`.

## Canvas bytes

`index.html`, `app.js`, `scenes.js`, `styles.css`, the packaged fonts, and the cover SVGs are byte-identical to package 1.0.0. Scene and canvas evidence in `qa/20261003-b4fb-qa-001/` is reused for those files only. It was not re-executed. `serve.py` and the launchers changed. The launcher and helper checks above are the retest.

`http://127.0.0.1:8765/` is run evidence only. It is not the owner download.
