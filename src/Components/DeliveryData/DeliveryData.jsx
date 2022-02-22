import React, { useState } from 'react'
import { TextField, Button } from '@mui/material/'

function DeliveryData({submitForm}) {
  const [CEP, setCEP] = useState('')
  const [adress, setAdress] = useState('')
  const [number, setNumber] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        submitForm({ CEP, adress, number, state, city })
      }}
    >
      <TextField
        value={CEP}
        onChange={event => {
          setCEP(event.target.value)
        }}
        variant="outlined"
        margin="normal"
        id="CEP"
        label="CEP"
        type="number"
      />
      <TextField
        value={adress}
        onChange={event => {
          setAdress(event.target.value)
        }}
        variant="outlined"
        fullWidth
        margin="normal"
        id="adress"
        label="Adress"
        type="text"
      />
      <TextField
        value={number}
        onChange={event => {
          setNumber(event.target.value)
        }}
        variant="outlined"
        margin="normal"
        id="number"
        label="Number"
        type="number"
      />
      <TextField
        value={state}
        onChange={event => {
          setState(event.target.value)
        }}
        variant="outlined"
        margin="normal"
        id="state"
        label="State"
        type="text"
      />
      <TextField
        value={city}
        onChange={event => {
          setCity(event.target.value)
        }}
        variant="outlined"
        margin="normal"
        id="city"
        label="City"
        type="text"
      />
      <Button type="submit" variant="contained" fullWidth>
        Finalize registration
      </Button>
    </form>
  )
}

export default DeliveryData
