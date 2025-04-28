# 最小構成でexeを動かすために、includeされないnativeModuleを同包したい。
# dist/で.exeを実行して、moduleエラーが出たらdist/node_modulesに引っ張ってくる。
try{
    # 1. dist/node_modules作成
    if (-not (Test-Path "dist/node_modules")) {
        New-Item -ItemType Directory -Path "dist/node_modules" | Out-Null
    }

    if ( (Test-Path "node_modules")) {
        Write-Host "最小構成隔離のため、親のnode_modulesを一時的にリネーム"
        Rename-Item -Path "node_modules" -NewName "_node_modules" | Out-Null
    }
    Write-Host "native module 引き込み開始"


    # 2. 繰り返し作業
    while ($true) {
        Write-Host "動作確認開始(不動時、正常動作後pause使用の可能性)"
        # 3. microShot.exe実行してエラーキャプチャ
        $output = & .\dist\microShot.exe 2>&1

        # nullチェック
        if (-not $output) {
            Write-Host "✅ 出力なし。完了！"
            break
        }

        # 出力を1本の文字列にまとめる（配列対策）
        $outputText = $output -join "`n"

        # 4. "Cannot find module 'xxx'" をgrep
        if ($outputText -match "Cannot find module '(.*?)'") {
            $missingModule = $Matches[1]

            # フルパスっぽかったらnode_modulesの後ろだけ取る
            if ($missingModule -match "node_modules[\\/](.*?)([\\/]|$)") {
                $missingModule = $Matches[1]
            }

            Write-Host "▶ モジュールが見つかりません: $missingModule"
            
            $sourcePath = "_node_modules\$missingModule"
            $destPath = "dist\node_modules\$missingModule"

            # 5. コピー
            if (Test-Path $sourcePath) {
                Write-Host "▶ コピーします: $sourcePath → $destPath"
                Copy-Item -Path $sourcePath -Destination $destPath -Recurse -Force
            }
            else {
                Write-Host "⚠ モジュール $missingModule は _node_modules に存在しません！"
                break
            }
        }
        else {
            Write-Host "✅ エラーが検出されません。完了！"
            break
        }
    }
}
catch{
    Write-Host "❌ エラーが発生しました: $_"
}

finally{
    if ( (Test-Path "_node_modules")) {
        Write-Host "最小構成隔離のため、一時的にリネームした親のnode_modulesを元に戻す"
        Rename-Item -Path "_node_modules" -NewName "node_modules" | Out-Null
    }
}
