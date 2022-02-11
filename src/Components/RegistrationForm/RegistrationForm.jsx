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
  const [cpf, setCpf] = useState('')
  const [promotions, setPromotions] = useState(true)
  const [newsletter, setNewsletter] = useState(true)
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
            setLastName(tmpLastName)
          }}
        />
        <TextField
          fullWidth
          margin="normal"
          id="cpfTextField"
          label="CPF"
          variant="outlined"
          value={cpf}
          onChange={event => {
            setCpf(event.target.value)
          }}
        />
      </Box>

      <FormControlLabel
        control={<Switch checked={promotions} defaultChecked={promotions} />}
        onChange={event => {
          setPromotions(event.target.checked)
        }}
        label="Prmotions"
      />
      <FormControlLabel
        control={<Switch checked={newsletter} defaultChecked={newsletter} />}
        onChange={event => {
          setNewsletter(event.target.checked)
        }}
        label="Newsletter"
      />
      <Button type="submit" variant="contained">
        Register
      </Button>
    </form>
  )
}
export default RegistrationForm
