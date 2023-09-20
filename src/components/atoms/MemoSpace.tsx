import React from 'react'
import TextField from '@mui/material/TextField'

const MemoSpace = () => {
  return (
    <div>
      <TextField
        id="outlined-multiline-static"
        label="MemoSpace"
        multiline
        rows={4}
        sx={{width: 350}}
      />
    </div>
  )
}

export default MemoSpace
