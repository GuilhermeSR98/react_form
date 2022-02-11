import React, { useState } from 'react'
import {
  Button,
  FormControlLabel,
  Switch,
  TextField,
  Box
} from '@mui/material/'

function RegistrationForm() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
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
          fullWidth
          margin="normal"
          id="nameTextField"
          label="Name"
          variant="outlined"
          value={name}
          onChange={event => {
            let tmpName = event.target.value
            if (tmpName.length >= 3) {
              tmpName = tmpName.substring(0, 3)
            }
            setName(tmpName)
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          id="lastNameTextField"
          label="Last Name"
          variant="outlined"
          value={lastName}
          onChange={event => {
            let tmpLastName = event.target.value
            if (tmpLastName.length >= 3) {
              tmpLastName = tmpLastName.substring(0, 3)
            }
            setLastName(tmpLastName)
          }}
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
