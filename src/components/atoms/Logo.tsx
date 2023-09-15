import React from 'react'
import styles from './atoms.module.css'

interface LogoProps {
  src: string
  alt: string
}

const Icon: React.FC<LogoProps> = ({ src, alt }) => {
  return <img className={styles.Logo} src={src} alt={alt} />
}

export default Icon
