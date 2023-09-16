import React from 'react'
import styles from './atoms.module.css'

interface TextProp {
  text: string
}

const CommentText: React.FC<TextProp> = ({ text }) => {
  return <p className={styles.CommentText}>{text}</p>
}

export default CommentText
