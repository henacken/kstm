import React from 'react'
import styles from './atoms.module.css'

interface NameProp {
  name: string
}

const CommentName: React.FC<NameProp> = ({ name }) => {
  return <p className={styles.CommentName}>{name}</p>
}

export default CommentName
