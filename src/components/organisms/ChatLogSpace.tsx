import React from 'react'
import styles from './atoms.module.css'
import Box from '@mui/material/Box'
import CommentMessage from '@/components/molecules/CommentMessage'
import SystemMessage from '@/components/molecules/SystemMessage'

interface ChatLogProp {
  chatLog: ChatItem[]
}

// このinterfaceを置くべきファイルを後で検討すること
export interface ChatItem {
  type: 'user' | 'system',
  name: string,
  comment: string
}

const ChatLogSpace: React.FC<ChatLogProp> = ({ chatLog }) => {
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
        {chatLog.map((item, index) => {
          if (item.type === 'user') {
            return <CommentMessage key={index} name={item.name} comment={item.comment} />
          } else if (item.type === 'system') {
            return <SystemMessage key={index} name={item.name} comment={item.comment} />
          }
          return false
        })}
      </Box>
    </div>
  )
}

export default ChatLogSpace
