import './App.css'
import React, { Component } from 'react'
import { Container, Typography } from '@mui/material/'
import RegistrationForm from './Components/RegistrationForm/RegistrationForm'



class App extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Typography variant="h3" component="h1">Registration Form</Typography>
        <RegistrationForm />
      </Container>
    )
  }
}

export default App
