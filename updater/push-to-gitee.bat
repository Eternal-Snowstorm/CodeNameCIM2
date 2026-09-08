@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0..\.."

where bash >nul 2>nul
if errorlevel 1 (
  echo [ERROR] bash not found in PATH. Please install Git for Windows first.
  pause
  exit /b 1
)

echo === Pushing local main content to Gitee mirror ===
bash "sync-gitee.sh"
echo.
echo Script finished with exit code %ERRORLEVEL%.
pause
