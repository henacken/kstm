## 使用ツール

- Next.js
- React(多分)
- DB(多分)
- TypeScript
- material-ui

### 静的解析ツール

- ESlint
- prettier(npx prettier --write .ですべてのファイルの整形がなされる)

## ファイル構成について

- 基本的にはsrc/appディレクトリ下を編集すればよい
- ルーティングについては、以下を参照。例えば、./src/app/chat/page.tsx -> localhost:3000/chatというURLになる
- 公式ドキュメント(ルーティングについて)[Next.js](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
- src/componentsディレクトリにはAtomic designのコンポーネントが入っている
- 画像ファイルはlt-platform/publicディレクトリ下に保存し，publicディレクトリからの相対パスで画像を指定，表示させる．(参考：https://qiita.com/only/items/311a0dec256ecfd5d8c9)

## ファイル説明

src/app/

- layoutファイル -> そのファイルの階層下での共有するUI
  ”use cliant”という記述について「ファイルに "use client "が定義されると、子コンポーネントを含む、そのファイルにインポートされた他のすべてのモジュールは、クライアントバンドルの一部とみなされます。」https://zenn.dev/luvmini511/articles/ec0e874a2cc1f1
- globals.css -> ファイル全体に適応するCSS
- pageファイル -> ルート(/)で表示されるファイル
- page.module.css -> 特定のクラスでCSSを適応するためのファイル

## Next.jsについての参考動画

- [古いバージョン]https://youtu.be/eEP7CLqnRr0?si=0wv6KqRrTw3I5BLN
- [新しいバージョン]https://youtu.be/VcMW2C9VNtI?si=ervNmO8dAEj45t0F

## material-uiについて

- インストール方法 https://mui.com/material-ui/getting-started/installation/
  一番上の”Default installation”のnpmのみ実行した
- テンプレート https://mui.com/material-ui/getting-started/templates/
  ログイン画面など使えそうなテンプレが乗っている
- コンポーネントの使い方(Button) https://mui.com/material-ui/react-button/
