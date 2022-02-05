import React from 'react';
import Button from '@mui/material/Button'

function RegistrationForm() {
  return (
    <form>
      <label>Name</label>
      <input type="text" />
      <label>Last Name</label>
      <input type="text" />
      <label>CPF</label>
      <input type="text" />
      <label>Prmotions</label>
      <input type="checkbox" />
      <label>Newsletter</label>
      <input type="checkbox" />
      <Button variant='contained'>Register</Button>
    </form>
  )
}
export default RegistrationForm
