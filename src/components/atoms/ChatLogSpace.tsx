import React from 'react'
import styles from './atoms.module.css'
import Stack from '@mui/material/Stack'
import CommentMessage from '@/components/molecules/CommentMessage'
import SystemMessage from '@/components/molecules/SystemMessage'
import Box from '@mui/material/Box'

interface ChatLogProp {
  ChatLog: string //ここにメッセージのデータを入れるようにする？
}

const SystemText: React.FC<ChatLogProp> = ({ ChatLog }) => {
  return (
    <div>
      <Box
      sx={{
        width: 330,
        maxHeight: 500,
        backgroundColor: '#fff',
        overflow: 'auto',
        padding: 1.2,
        border: 2,
        borderColor: '#ddd',
        borderRadius: 1
      }}>
        <CommentMessage
          name={'ogaog'}
          comment={
            'コメントああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ'
          }
        />
        <CommentMessage
          name={
            'あああああああああああああああああああああああああああああああaa'
          }
          comment={'コメントあああeeああああああああああああああ'}
        />
        <SystemMessage
          name={'システムメッセージあああ'}
          comment={
            'あああああああああああああああああああああああああああああああ'
          }
        />
        <CommentMessage
          name={'あああああああaa'}
          comment={'コメントあああeeあaaaあああああああああああああ'}
        />
        <CommentMessage
          name={
            'ああaa'
          }
          comment={'コメントあああeeああああああああああああああ'}
        />
      </Box>
    </div>
  )
}

export default SystemText
