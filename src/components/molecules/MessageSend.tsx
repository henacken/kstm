import React from 'react'
import styles from './molecules.module.css'
import MessageType from '../atoms/MessageType'
import SendButton from '../atoms/SendButton'
import Stack from '@mui/material/Stack'

const MessageSend = () => {
  return (
    <div>
      <Stack direction="row"spacing={2} sx={{width: 330, margin: 2}}>
        <MessageType />
        <SendButton />
      </Stack>
    </div>
  )
}

export default MessageSend
