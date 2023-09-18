import React from 'react'
import styles from './molecules.module.css'
import SystemText from '../atoms/SystemText'
import SystemName from '../atoms/SystemName'
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
        backgroundColor: '#e3f2fd',
        padding: 0.7,
        marginTop: 1,
      }}
    >
      <SystemName name={name} />
      <SystemText text={comment} />
    </Box>
  )
}

export default MessageSend
