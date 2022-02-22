import React, { useState } from 'react'
import { TextField, Button } from '@mui/material/'

function UserData({ submitForm }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        submitForm({ email, password })
      }}
    >
      <TextField
        value={email}
        onSubmit={event => {
          setEmail(event.target.value)
        }}
        variant="outlined"
        fullWidth
        margin="normal"
        id="email"
        label="Email"
        type="email"
      />
      <TextField
        value={password}
        onSubmit={event => {
          setPassword(event.target.value)
        }}
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
