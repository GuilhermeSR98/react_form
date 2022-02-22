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
          fullWidth
          margin="normal"
          id="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={event => {
            setEmail(event.target.value)
          }}
        />
      <TextField
        value={password}
        onChange={event => {
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
