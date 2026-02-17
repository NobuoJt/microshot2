# microShot2 : screen shot tool

v2.0.7_b

オフフォーカス、1keyでウィンドウのスクショ画像を撮影。

指定秒数ずつ差分をとり、差分が大きい場合は Discord に通知します。

CLI です。

continue from [microShot(Legacy)](https://github.com/NobuoJt/microShot/blob/main/readme.md)

(Private Repo)

![screenshot](pix/image.png)

## Usage

`ts-node index.ts` or

`dist/microShot.exe`

## Key (Focus)

It means console input.

### `l` — Show window list (summary)

- Info by window table

### `L` — Show window list (detail)

- appName list

### `exit` — Exit

### `r` — Reload

- Reload `.secret.json` and reinitialize

## Key (Global)

Even if the window is not in focus.

### `Right Ctrl` — One shot capture

- `targetWindows.secret` の各行とマッチする appName が対象
- ファイル名は `pix/{appName}_{YYYY}_{M}_{D} {h}_{m}_{s}`

### `F10` — Start diff notice

- `targetAutoWindows.secret` の各行とマッチする appName が対象
- `url.secret` の "discord" フィールドにある webhook に通知します
- 変化がある場合、Discord に通知します (interval=5000ms)
- diff チャンネル

### `F9` — Stop diff notice

## `.secret.json` の書き方

```json
{
    "DISCORD_POST_URL": "https://discord.com/api/webhooks/{ほげほげ}",
    "TARGET_WINDOW": {
        "ONE_SHOT": ["エクスプローラー"],
        "AUTO": ["エクスプローラー"]
    },
    "TOLERANCE": 20
}
```

| Entry | Desc. |
| ---: | :--- |
| DISCORD_POST_URL | WebHook を発火させる URL |
| TARGET_WINDOW / ONE_SHOT | スクショ対象ウィンドウ名 (List) |
| TARGET_WINDOW / AUTO | diff notice 対象ウィンドウ名 (List) |

## npm run スクリプト一覧

### index.ts → node 実行

`npm start` — init

`rs` — リセット

### 一連のコンパイル

以下のスクリプトを逐次実行してください。

_ルートディレクトリで行ってください。_

`npm run compile` — js → ts → cjs → blob → exe

### tsc コンパイル ts → js

`npm run build_j` — tsc -p .

### esbuild バンドル (js の module を組み込み)

`npm run build_i`

### exe 化

Node の新機能 SEA を使う。
試験機能のため警告が出る場合があります。

`npm run build_e`

### 組み込めない native な module を同梱

`npm run build_after`

## File Tree

```text
package*.json           Node 設定ファイル
index.ts                メインコード
.secret.json            本プログラム用設定ファイル
.gitignore
tsconfig.json           index.ts -> build/index.js

schema/
    s.schema.json         .secret.json の書き方を定義
node_modules/           dev 用 module (full)
dist/                   配布用最小構成
    node_modules/         NativeModule 関連のみ同梱
    pix/                  スクショ出力
    .secret.json, .example 設定ファイル例
    microShot.exe         本プログラム
build/                  中間ファイル・ビルド定義
    compile_exe.ps1       Node-SEA で EXE 化スクリプト
    getNativeModule_4minimum.ps1  要求 NativeModule を持ってくる
    index.js              tsc により JS 化された TS
    index_integrated.js   esbuild によりバインドされた cjs
    package*.json         コピー
    sea-config.json       Node-SEA で EXE 化するための設定
```

## ライセンス関連

本プロジェクト自体は MIT ライセンスです。

詳細は `license_detail/` に記載しています。

| ファイル / フォルダ | 説明 |
| --- | --- |
| NOTICE | Apache 2.0, CC-BY の継承部分 |
| license_sum | npx license-checker の結果の一部 |
| license_links | license_sum のリンク部分 |
| get_license_files.ps1 | license_links から LICENSE 本文を引っ張ってくるスクリプト |
| thirdParty/ | 引っ張ってきた LICENSE 本文たち |
