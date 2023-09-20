import React from 'react'
import TextField from '@mui/material/TextField'

interface MessageTypeProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const MessageType = (props: MessageTypeProps) => {
  return (
    <div>
      <TextField
        id="filled-basic"
        label="Comment"
        variant="filled"
        onChange={props.onChange}
      />
    </div>
  )
}

export default MessageType
