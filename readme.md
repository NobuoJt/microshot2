# microShot2 : screen shot tool
v2.0.1_n

オフフォーカス、1keyでウィンドウのスクショ画像を撮影。  
指定秒数ずつ差分をとり差分が大きい場合はdiscordに通知する。  
CLIです。

continue from [microShot(Legacy)](https://github.com/NobuoJt/microShot/blob/main/readme.md) (Private Repo)

## Usage
```ts-node index.ts``` or 
```dist/microShot.exe```

## Key Config

### ```L``` Show window List
- info by window Table/ appName List
### ```Right Ctrl``` One shot capture
- ```targetWindows.secret```の各行とマッチするappNameが対象
- ファイル名は```pix/{appName}_{YYYY}_{M}_{D} {h}_{m}_{s}```

### ```F10``` Start diff notice
- ```targetAutoWindows.secret```の各行とマッチするappNameが対象
- ```url.secret``` の"discord"フィールドにあるwebhookに投げる。
- 変化がある場合、Discordに通知(interval=5000ms)
- diffチャンネル

### ```F9``` Stop diff notice

## ```.secret.json``` の書き方

```json
{
    "DISCORD_POST_URL":"https://discord.com/api/webhooks/{ほげほげ}",
    "TARGET_WINDOW":{
        "ONE_SHOT":   ["エクスプローラー"],
        "AUTO":       ["エクスプローラー"]
    },
    "TOLERANCE":20 
}
```
|Entry|Desc.|
|-|-|
|DISCORD_POST_URL           |WebHookを発火させるURL|
|TARGET_WINDOW / ONE_SHOT   |スクショ対象ウィンドウ名(List)
|TARGET_WINDOW / AUTO       |diff notice対象ウィンドウ名(List)


## npm run スクリプト一覧

### index.ts→node実行
```npm start``` init  
```rs``` リセット

### 一連のコンパイル  
以下のスクリプトを逐次実行。  
*ルートディレクトリで行ってください。*  

```npm run compile``` js → ts → cjs → blob → exe

### tscコンパイル ts → js

```npm run build_j``` tsc -p .

### esbuildバンドル (jsのmoduleを組み込み)

```npm run build_i```

### exe化
nodeの新機能SEAを使う。
試験機能のため警告が出る。

```npm run build_e```

### 組み込めないnativeなmoduleを同袍

```npm run build_after```

## File Tree


|Files||
|-|-|
   package*.json | Node 設定ファイル
   index.ts | メインコード
   .secret.json | 本プログラム用設定ファイル
   .gitignore | 
   tsconfig.json | index.ts -> build/index.js

|Folders|File||
|-|-|-|
schema/ || 
-|s.schema.json|            .secret.jsonの書き方を定義
node_modules/||             dev用module(full)
dist/||                     配布用最小構成
-|node_modules/|            NativeModule関連のみ同袍
-|pix/|                     スクショ出力
-|.secret.json, .example|   設定ファイル例
-|microShot.exe|            本プログラム
build/||                    中間ファイル・ビルド定義
-|compile_exe.ps1|          Node-SEAでEXE化スクリプト
-|getNativeModule_4minimum.ps1|要求NativeModule持ってくる
-|index.js|                 tscによりJS化されたTS
-|index_integrated.js|      esbuildによりバインドされたcjs
-|package*.json|            コピー 
-|sea-config.json|          Node-SEAでEXE化するための設定