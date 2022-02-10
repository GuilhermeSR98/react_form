import React from 'react'
import {
  Button,
  FormControlLabel,
  Switch,
  TextField,
  Box
} from '@mui/material/'

function RegistrationForm() {
  return (
    <form>
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

      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Prmotions"
      />
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="Newsletter"
      />
      <Button variant="contained">Register</Button>
    </form>
  )
}
export default RegistrationForm
