import React from 'react'
import styles from './organisms.module.css'
import Logo from '../atoms/Logo'
import LogoutButton from '../atoms/button'

interface HeaderProps {
  logoSrc: string
  logoAlt: string
}

const Header: React.FC<HeaderProps> = ({ logoSrc, logoAlt }) => {
  return (
    <header className={styles.header}>
      <Logo src={logoSrc} alt={logoAlt} />
      <LogoutButton />
    </header>
  )
}

export default Header
