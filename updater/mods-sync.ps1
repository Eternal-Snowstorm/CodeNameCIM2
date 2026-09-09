param(
  [string]$Root = '',
  [switch]$DryRun
)
$ErrorActionPreference = 'Stop'

# Client root = parent of updater (folder name does not have to be .minecraft)
if (-not $Root) { $Root = Split-Path -Parent $PSScriptRoot }
$Root = (Resolve-Path $Root).Path
$manifest = Join-Path $Root 'updater\update.tsv'
$deleteList = Join-Path $Root 'updater\delete.tsv'

# Safety: only touch these dirs; never saves/options.txt/server data
$safePrefixes = @('mods/', 'config/', 'kubejs/', 'defaultconfigs/', 'resourcepacks/')

function Test-SafePath([string]$p) {
  if ([string]::IsNullOrWhiteSpace($p)) { return $false }
  if ($p.StartsWith('/') -or $p.StartsWith('\') -or $p.Contains('..')) { return $false }
  foreach ($pre in $safePrefixes) { if ($p.StartsWith($pre)) { return $true } }
  return $false
}

# --- 删除清单 ---
if (Test-Path -LiteralPath $deleteList) {
  foreach ($line in Get-Content -LiteralPath $deleteList) {
    $p = $line.Trim()
    if (-not (Test-SafePath $p)) { continue }
    $fp = Join-Path $Root $p
    if (Test-Path -LiteralPath $fp) {
      if ($DryRun) { Write-Host "[mods][dry-run] would delete: $p"; continue }
      Remove-Item -Force -LiteralPath $fp
      Write-Host "[mods] deleted: $p"
    }
  }
}

# --- 更新清单 ---
if (-not (Test-Path -LiteralPath $manifest)) {
  Write-Host '[mods] no update.tsv manifest, skip mod sync'
  exit 0
}

$total = 0; $skipped = 0; $downloaded = 0; $failed = 0; $nosource = 0

foreach ($line in Get-Content -LiteralPath $manifest) {
  if ([string]::IsNullOrWhiteSpace($line)) { continue }
  $parts = $line -split "`t"
  if ($parts.Count -lt 2) { continue }
  $hash = $parts[0].Trim()
  $path = $parts[1].Trim()
  $url  = if ($parts.Count -ge 3) { $parts[2].Trim() } else { '' }
  if (-not (Test-SafePath $path)) { continue }

  $dest = Join-Path $Root $path
  $total++

  if (Test-Path -LiteralPath $dest) {
    $h = (Get-FileHash -Algorithm SHA1 -LiteralPath $dest).Hash.ToLowerInvariant()
    if ($h -eq $hash.ToLowerInvariant()) { $skipped++; continue }
  }

  if (-not $url) {
    $nosource++
    if ($DryRun) { Write-Host "[mods][dry-run] missing + no source: $path"; continue }
    Write-Host "[mods] no source for: $path" 
    continue
  }

  if ($DryRun) { Write-Host "[mods][dry-run] would download: $path"; continue }

  $destDir = Split-Path -Parent $dest
  if (-not (Test-Path $destDir)) { New-Item -ItemType Directory -Force -Path $destDir | Out-Null }
  $tmp = "$dest.download"
  Write-Host "[mods] downloading: $path"
  try {
    if (Test-Path -LiteralPath $tmp) { Remove-Item -Force -LiteralPath $tmp }
    & curl.exe -L --fail --retry 3 --retry-delay 2 -o $tmp $url
    if ($LASTEXITCODE -ne 0) { throw "curl exit $LASTEXITCODE" }
    $h = (Get-FileHash -Algorithm SHA1 -LiteralPath $tmp).Hash.ToLowerInvariant()
    if ($h -ne $hash.ToLowerInvariant()) { throw "sha1 mismatch (got $h)" }
    Move-Item -Force -LiteralPath $tmp -Destination $dest
    $downloaded++
  } catch {
    Write-Host "[mods] FAILED: $path : $_"
    Remove-Item -Force -LiteralPath $tmp -ErrorAction SilentlyContinue
    $failed++
  }
}

Write-Host "[mods] summary: total=$total skipped=$skipped downloaded=$downloaded failed=$failed no-source=$nosource"
if ($DryRun) { exit 0 }
if ($failed -gt 0) { exit 1 }
exit 0
