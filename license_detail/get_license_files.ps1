# コピー先ディレクトリ
$destinationDir = "license_thirdparty\licenses"

# コピー先ディレクトリが存在しない場合は作成
if (-not (Test-Path $destinationDir)) {
    New-Item -ItemType Directory -Path $destinationDir | Out-Null
}

# license_linksファイルのパス
$licenseLinksFile = "license_thirdparty\license_links"

# license_linksファイルを1行ずつ読み込む
Get-Content $licenseLinksFile | ForEach-Object {
    $sourcePath =  $_
    
    $destinationPath = Join-Path $destinationDir $_
    
    if (-not (Test-Path $destinationPath)) {
        New-Item -Path $destinationPath -Force | Out-Null
    }

    # ファイルが存在する場合のみコピー
    if (Test-Path $sourcePath) {
        if(Test-Path $destinationPath){
        Copy-Item -Path $sourcePath -Destination $destinationPath -Force
        Write-Host "Copied: $sourcePath -> $destinationPath"
    }
    } else {
        Write-Host "File not found: $sourcePath"
    }
}