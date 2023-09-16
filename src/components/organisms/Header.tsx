import React from 'react'
import styles from './organisms.module.css'
import Icon from '../atoms/Icon'
import LogoutButton from '../atoms/LogoutButton'

interface HeaderProps {
  logoSrc: string
  logoAlt: string
}

const Header: React.FC<HeaderProps> = ({ logoSrc, logoAlt }) => {
  return (
    <header className={styles.header}>
      <Icon style={styles.headerLogo} src={logoSrc} alt={logoAlt} />
      <LogoutButton />
    </header>
  )
}

export default Header
