import React from 'react'
import styles from './molecules.module.css'
import CommentText from '../atoms/CommentText'
import CommentName from '../atoms/CommentName'
import Box from '@mui/material/Box'

interface CommentProps {
  name: string
  comment: string
}

const MessageSend: React.FC<CommentProps> = ({ name, comment }) => {
  return (
    <Box
      sx={{
        width: 300,
        backgroundColor: '#f4f4f4',
        padding: 0.7,
        marginTop: 1,
      }}
    >
      <CommentName name={name} />
      <CommentText text={comment} />
    </Box>
  )
}

export default MessageSend
