@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0..\.."

set "REMOTE_URL=https://gitee.com/eternalsnowstorm/mechanism-and-innovation"

where git >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Git is not installed or not in PATH.
  echo Please install Git for Windows and run this script again.
  pause
  exit /b 1
)

if not exist ".git" (
  echo [ERROR] This folder is not a git repository.
  pause
  exit /b 1
)

git remote get-url gitee >nul 2>nul
if errorlevel 1 git remote add gitee "%REMOTE_URL%"

echo === Pushing main to Gitee mirror ===
git push gitee main:master
if errorlevel 1 (
  echo [ERROR] Push to Gitee failed.
  pause
  exit /b 1
)

echo.
echo Done! Gitee mirror has been updated.
pause
