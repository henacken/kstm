import React from 'react'
import styles from './atoms.module.css'
import Box from '@mui/material/Box'
import CommentMessage from '@/components/molecules/CommentMessage'
import SystemMessage from '@/components/molecules/SystemMessage'

interface ChatLogProp {
  ChatLog: string //ここにチャットのデータを入れるようにする？
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
        {/* ここからチャット欄の内容 */}
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
        {/* ここまでチャット欄の内容 */}
      </Box>
    </div>
  )
}

export default SystemText
