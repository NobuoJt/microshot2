# microShot2 : screen shot tool

v2.0.7_b

オフフォーカス、1keyでウィンドウのスクショ画像を撮影します。

指定秒数ずつ差分をとり、差分が大きい場合は Discord に通知します。

CLI / 配布バイナリで動作します。

![screenshot](pix/image.png)

## Usage

実行方法の例:

```powershell
# 開発環境 (TypeScript を直接実行)
npx tsx .\index.ts

# または pnpm スクリプト
pnpm start

# 配布済みバイナリ
.\dist\microShot.exe
```

## Key (Focus)

コンソール入力時のコマンドです。コンソールコマンドは常に有効で、グローバルキーフックが利用できない場合でも操作できます。

### `l` — Show window list (summary)

- ウィンドウの一覧（要約）を表示します。

### `L` — Show window list (detail)

- アプリ名リストを表示します。

### `r` — Reload

- `.secret.json` を再読み込みして再初期化します。

### `c` / `capture` — One shot capture

- `TARGET_WINDOW.ONE_SHOT` に列挙された `appName` が対象になります。

### `on` / `start` — Start auto diff

- 自動差分監視を開始します（F10 相当）。

### `off` / `stop` — Stop auto diff

- 自動差分監視を停止します（F9 相当）。

### `exit` — Exit

- プログラムを終了します。

## Key (Global)

フォーカスに関係なく受け付けるキー操作です（利用可能な場合）。

- `Right Ctrl` — One shot capture
- `F10` — Start auto diff notice
- `F9` — Stop diff notice

注意: グローバルキーフックは `node-global-key-listener` とそのネイティブヘルパー (`WinKeyServer.exe`) に依存します。配布物にネイティブバイナリが含まれていない、またはアンチウイルスによってバイナリが削除された場合でも、アプリは落ちずにコンソールコマンドへフォールバックします。

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

## 実行時の注意 / モジュール互換性

- `node-screenshots`（スクリーンキャプチャ）や `looks-same`（差分判定）はネイティブ依存（例: `sharp`）を含みます。これらが正しくインストール/ビルドされていない場合、キャプチャや差分通知機能は無効化され、ログを出力して処理は継続します。
- `node-global-key-listener` のネイティブヘルパー（`WinKeyServer.exe`）が欠落している場合も、グローバルキーフックは自動的に無効化され、コンソールコマンドでの操作にフォールバックします。

必要であれば配布にネイティブバイナリを同梱するか、AV 側に誤検出レポートを提出してください。

## npm run スクリプト一覧

### index.ts → node 実行

`npm start` — init

`rs` — リセット

### 一連のコンパイル

`npm run compile` — js → ts → cjs → blob → exe

### tsc コンパイル ts → js

`npm run build_j` — tsc -p .

### esbuild バンドル (js の module を組み込み)

`npm run build_i`

### exe 化

Node の新機能 SEA を使う。試験機能のため警告が出る場合があります。

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
