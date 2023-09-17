'use client'

import { signOut } from 'next-auth/react'
import styles from './logout.module.css'

export const LogoutForm = () => {
  const callbackUrl = '/'

  return (
    <div className={styles.logoutForm}>
      <a
        onClick={() => signOut({ callbackUrl })}
        role="button"
        className={styles.logoutButton}
      >
        Sign out
      </a>
    </div>
  )
}
