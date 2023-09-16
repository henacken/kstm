import React from 'react'
import styles from './atoms.module.css'

interface NameProp {
  name: string
}

const SystemName: React.FC<NameProp> = ({ name }) => {
  return <p className={styles.SystemName}>{name}</p>
}

export default SystemName
