import './App.css'
import { Component, Fragment } from 'react'
import RegistrationForm from './Components/RegistrationForm/RegistrationForm'

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Registration Form</h1>
        <RegistrationForm />
      </Fragment>
    )
  }
}

export default App
