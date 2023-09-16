import type { NextAuthOptions } from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'
import GitHubProvider from 'next-auth/providers/github'

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
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
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

  pages: {
    signIn: '/auth/signin',
  },
  theme: {
    colorScheme: 'auto', // "auto" | "dark" | "light"
    brandColor: '', // Hex color code
    logo: 'https://raw.githubusercontent.com/henacken/img/main/kstm.png', // Absolute URL to image
    buttonText: '', // Hex color code
  },
}
