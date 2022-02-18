import React, { useState } from 'react'
import PersonalData from '../PersonalData/PersonalData'
import UserData from '../UserData/UserData'
import DeliveryData from '../DeliveryData/DeliveryData'
import { Typography } from '@mui/material'

function RegistrationForm(CPFValidation, submitForm) {
  const [stage, setStage] = useState(0)
  function currentStage(stage) {
    switch (stage) {
      case 0:
        return <UserData />
      case 1:
        return <PersonalData CPFValidation={CPFValidation} submitForm={submitForm} />
      case 2:
        return <DeliveryData />
      default:
        return (
          <Typography variant="h3" component="h1">
            Error
          </Typography>
        )
    }
  }

  return <>{currentStage(stage)}</>
}

export default RegistrationForm
