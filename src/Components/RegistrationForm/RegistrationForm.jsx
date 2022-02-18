import React, { useState } from 'react'
import PersonalData from '../PersonalData/PersonalData'
import UserData from '../UserData/UserData'
import DeliveryData from '../DeliveryData/DeliveryData'

function RegistrationForm(CPFValidation, submitForm) {
  const [stage, setStage] = useState(0)
  const forms = [
    <UserData submitForm={next} />,
    <PersonalData submitForm={next} CPFValidation={CPFValidation} />,
    <DeliveryData submitForm={submitForm} />
  ]

  function next() {
    setStage(stage + 1)
  }

  return <>{forms[stage]}</>
}

export default RegistrationForm
