import type { NextAuthOptions } from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

export const options: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: {
        params: {
          // This is the scope that we want to request from Discord
          scope: 'identify email guilds',
        },
      },
    }),
  ],
  callbacks: {
    // This is the callback that we want to use to get oAuth tokens
    async jwt({ token, account }: any) {
      if (account) {
        token.accessToken = account.access_token
        token.tokenType = account.token_type
      }
      return token
    },

    // This is the callback that we want to use to get the session
    async session({ session, token }: any) {
      if (session) {
        session.accessToken = token.accessToken
        session.tokenType = token.tokenType
      }
      return session
    },
  },
}
