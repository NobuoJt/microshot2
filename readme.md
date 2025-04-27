# microShot : screen shot tool
v1.0.4

オフフォーカス、1keyでウィンドウのスクショ画像を撮影。  
指定秒数ずつ差分をとり差分が大きい場合はdiscordに通知する。

## file setting


|||
|-|-|
```(root)```  |
|index.*|ソースファイル|
|app_onNode.exe |コンパイル後、実行ファイル
 microShot.bat|実行ファイル|
|pix/```{appName}_{YYYY}_{M}_{D} {h}_{m}_{s}```|　画像ファイルが保存される|  
targetWindows.secret|　キャプチャーするソフト名を羅列  
targetAutoWindows.secret|　定期キャプチャーするソフト名を羅列  
url.secret| json形式{"discord":"https://~"}でwebhookのURLを記入

## usage
```node index.js```

### ```L``` Show window List
- info by window Table/ appName List
### ```Right Ctrl``` One shot capture
- ```targetWindows.secret```の各行とマッチするappNameが対象
- ファイル名は```pix/{appName}_{YYYY}_{M}_{D} {h}_{m}_{s}```

### ```F10``` Start diff notice
- ```targetAutoWindows.secret```の各行とマッチするappNameが対象
- ```url.secret``` の"discord"フィールドにあるwebhookに投げる。
- 変化がある場合、Discordに通知(tolerance:5,interval=5000ms)
- diffチャンネル

### ```F9``` Stop diff notice

## index.ts→node実行&tscコンパイル
```npm start``` init
```rs``` リセット

## exe化
nodeの新機能SEAを使う。
試験機能のため警告が出る。

```npm run compile``` 　```sea-config.json```を参照してスクリプトを注入したnodeを作成。

## script

```
"build:live": "nodemon --watch 'index.ts' --exec \"ts-node\" index.ts"
```

```
"compile": "tsc index.ts & node --experimental-sea-config sea-config.json & powershell -c Copy-Item (command node -Syntax) app_onNode.exe & npx postject app_onNode.exe NODE_SEA_BLOB sea-prep.blob --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2"
```