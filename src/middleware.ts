// アプリケーション全体のページを保護する
// 参考 => https://next-auth.js.org/configuration/nextjs#middleware
export { default } from 'next-auth/middleware'

// 以下のページは保護するページ。それ以外のページ('/', '/archive')は見れる
export const config = { matcher: ['/home', '/live', '/settings'] }
