import React from 'react'
import { TextField, Button } from '@mui/material/'

function DeliveryData() {
  return (
    <form>
      <TextField
        variant="outlined"
        margin="normal"
        id="CEP"
        label="CEP"
        type="number"
      />
      <TextField
        variant="outlined"
        fullWidth
        margin="normal"
        id="adress"
        label="Adress"
        type="text"
      />
      <TextField
        variant="outlined"
        margin="normal"
        id="number"
        label="Number"
        type="number"
      />
      <TextField
        variant="outlined"
        margin="normal"
        id="state"
        label="State"
        type="text"
      />
      <TextField
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
