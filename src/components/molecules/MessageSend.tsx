import React, { useState } from 'react'
import styles from './molecules.module.css'
import MessageType from '../atoms/MessageType'
import SendButton from '../atoms/SendButton'
import Stack from '@mui/material/Stack'

interface MessageSendProps {
  onMessageSend(message: string): void
}

const MessageSend = (props: MessageSendProps) => {
  const [message, setMessage] = useState<string>('')

  const handleClick = () => {
    if (message !== '') {
      props.onMessageSend(message)
    }
  }
  return (
    <div>
      <Stack direction="row" spacing={2} sx={{ width: 330, margin: 2 }}>
        <MessageType
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <SendButton onClick={handleClick} />
      </Stack>
    </div>
  )
}

export default MessageSend
