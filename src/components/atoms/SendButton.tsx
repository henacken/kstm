import React from 'react'
import Button from '@mui/material/Button'

const SendButton = () => {
  return (
    <div>
      <Button variant="contained" sx={{ height: '3.5rem' }} disableElevation>
        send
      </Button>
    </div>
  )
}

export default SendButton
