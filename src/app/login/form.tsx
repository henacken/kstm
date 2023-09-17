'use client'

import { signIn } from 'next-auth/react'
import styles from './login.module.css'

export const LoginForm = () => {
  const callbackUrl = '/home'

  return (
    <div className={styles.loginForm}>
      <a
        onClick={() => signIn('discord', { callbackUrl })}
        role="button"
        className={styles.loginButton}
      >
        <img
          src="public/images/discord-mark-black.svg"
          alt="Discord Logo"
          className={styles.logoImg}
        />
        Sign in with Discord
      </a>
      <a
        onClick={() => signIn('github', { callbackUrl })}
        role="button"
        className={styles.loginButton}
      >
        <img
          src="public/images/github-mark-white.png"
          alt="GitHub Logo"
          className={styles.logoImg}
        />
        Sign in with GitHub
      </a>
    </div>
  )
}
