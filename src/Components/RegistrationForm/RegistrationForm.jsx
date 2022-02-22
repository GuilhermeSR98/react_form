import React, { useEffect, useState } from 'react'
import PersonalData from '../PersonalData/PersonalData'
import UserData from '../UserData/UserData'
import DeliveryData from '../DeliveryData/DeliveryData'
import { Step, StepLabel, Stepper, Typography } from '@mui/material'

function RegistrationForm({ CPFValidation, submitForm }) {
  const [stage, setStage] = useState(0)
  const [collectedData, setCollectedData] = useState({})
  useEffect(() => {
    if (stage === forms.length-1) {
      submitForm(collectedData)
    }
  })
  const forms = [
    <UserData submitForm={collectData} />,
    <PersonalData submitForm={collectData} CPFValidation={CPFValidation} />,
    <DeliveryData submitForm={collectData} />,
    <Typography variant='h5'>Thank You!</Typography>
  ]

  function collectData(data) {
    setCollectedData({ ...collectData, ...data })
    next()
  }
  function next() {
    setStage(stage + 1)
  }

  return <>
    <Stepper activeStep={stage}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Personal</StepLabel></Step>
      <Step><StepLabel>Delivery</StepLabel></Step>
      <Step><StepLabel>Finalization</StepLabel></Step>
    </Stepper>
    {forms[stage]}</>
}

export default RegistrationForm
