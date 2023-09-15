## 使用ツール

- Next.js
- React(多分)
- DB(多分)
- TypeScript

### 静的解析ツール

- ESlint
- prettier(npx prettier --write .ですべてのファイルの整形がなされる)

## ファイル構成について

- 基本的にはsrc/appディレクトリ下を編集すればよい
- ルーティングについては、以下を参照。例えば、./src/app/chat/page.tsx -> localhost:3000/chatというURLになる
- 公式ドキュメント(ルーティングについて)[Next.js](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)

## ファイル説明

- layoutファイル -> そのファイルの階層下での共有するUI
- globals.css -> ファイル全体に適応するCSS
- pageファイル -> ルート(/)で表示されるファイル
- page.module.css -> 特定のクラスでCSSを適応するためのファイル

## Next.jsについての参考動画

- [古いバージョン]https://youtu.be/eEP7CLqnRr0?si=0wv6KqRrTw3I5BLN
- [新しいバージョン]https://youtu.be/VcMW2C9VNtI?si=ervNmO8dAEj45t0F
