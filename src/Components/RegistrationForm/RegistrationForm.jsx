import React, { useState } from 'react'
import {
  Button,
  FormControlLabel,
  Switch,
  TextField,
  Box
} from '@mui/material/'

function RegistrationForm() {
  const [name, setName] = useState('Guilherme')
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
      }}
    >
      <Box
        component="form"
        sx={{
          maxWidth: '100%'
          /* '& > :not(style)': { m: 1 } */
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={name}
          fullWidth
          margin="normal"
          id="nameTextField"
          label="Name"
          variant="outlined"
          onChange={event => {
            if (name.length >= 3) {
              setName(name.substring(0, 3))
            }
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          id="lastNameTextField"
          label="Last Name"
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          id="cpfTextField"
          label="CPF"
          variant="outlined"
        />
      </Box>

      <FormControlLabel control={<Switch defaultChecked />} label="Prmotions" />
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Newsletter"
      />
      <Button type="submit" variant="contained">
        Register
      </Button>
    </form>
  )
}
export default RegistrationForm
