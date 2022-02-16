import React from 'react'
import { TextField, Button } from '@mui/material/'

function UserData() {
  return (
    <form>
      <TextField
        variant="outlined"
        fullWidth
        margin="normal"
        id="email"
        label="Email"
        type="email"
      />
      <TextField
        variant="outlined"
        fullWidth
        margin="normal"
        id="password"
        label="password"
        type="password"
      />
      <Button type="submit" variant="contained">
        Register
      </Button>
    </form>
  )
}

export default UserData
