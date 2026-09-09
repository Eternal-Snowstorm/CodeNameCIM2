@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0"

where bash >nul 2>nul
if errorlevel 1 (
  echo [ERROR] bash not found. Please install Git for Windows.
  pause
  exit /b 1
)

bash "%~dp0release-mods.sh" %*
echo.
echo Script finished with exit code %ERRORLEVEL%.
pause
