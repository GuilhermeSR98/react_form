import './App.css'
import React, { Component } from 'react'
import { Container, Typography } from '@mui/material/'
import RegistrationForm from './Components/RegistrationForm/RegistrationForm'

class App extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Typography variant="h3" component="h1">
          Registration Form
        </Typography>
        <RegistrationForm CPFValidation={CPFValidation} submitForm={submitForm} />
      </Container>
    )
  }
}
function submitForm(data) {
}
function CPFValidation(cpf) {
  if (cpf.length !== 11) {
    return { valid: false, text: 'The CPF must contain 11 digits' }
  } else {
    return {valid: true, text: ''}
  }
}
export default App
