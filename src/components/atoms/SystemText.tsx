import React from 'react'
import styles from './atoms.module.css'

interface TextProp {
  text: string
}

const SystemText: React.FC<TextProp> = ({ text }) => {
  return <p className={styles.SystemText}>{text}</p>
}

export default SystemText
