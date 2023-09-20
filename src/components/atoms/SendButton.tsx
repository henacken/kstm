import React from 'react'
import Button from '@mui/material/Button'

interface SendButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const SendButton = (props: SendButtonProps) => {
  return (
    <div>
      <Button
        variant="contained"
        sx={{ height: '3.5rem' }}
        disableElevation
        onClick={props.onClick}
      >
        send
      </Button>
    </div>
  )
}

export default SendButton
