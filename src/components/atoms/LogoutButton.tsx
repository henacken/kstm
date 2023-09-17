import React from 'react'
// import styles from './atoms.module.css'
import Button from '@mui/material/Button'

const LogoutButton = () => {
  return (
    <div>
      {/* <button className={styles.LogoutButton}>logout</button> */}
      <Button
        href="/api/auth/signout"
        variant="contained"
        color="error"
        disableElevation
      >
        logout
      </Button>
    </div>
  )
}

export default LogoutButton
