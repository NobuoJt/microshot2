Write-Host "[build_native] Start: build native modules from source"
$env:NPM_CONFIG_BUILD_FROM_SOURCE = "true"

Write-Host "[build_native] Running npm ci..."
npm ci

Write-Host "[build_native] Running npm rebuild --build-from-source..."
npm rebuild --build-from-source

if (Test-Path "node_modules\sharp") {
    Write-Host "[build_native] Rebuilding sharp specifically..."
    npm rebuild sharp --build-from-source
}

Write-Host "[build_native] Collecting .node files into dist\node_modules..."
$dest = Join-Path -Path (Get-Location) -ChildPath "dist\node_modules"
New-Item -ItemType Directory -Force -Path $dest | Out-Null

Get-ChildItem -Path "node_modules" -Recurse -Include "*.node" -ErrorAction SilentlyContinue | ForEach-Object {
    $full = $_.FullName
    $rel = $full.Substring((Get-Location).Path.Length + 1)
    $out = Join-Path $dest $rel
    New-Item -ItemType Directory -Force -Path (Split-Path $out) | Out-Null
    Copy-Item -Path $full -Destination $out -Force
}

Write-Host "[build_native] Done. Native modules copied to dist\\node_modules"
