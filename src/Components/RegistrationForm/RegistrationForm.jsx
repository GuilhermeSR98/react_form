import React, { useEffect, useState } from 'react'
import PersonalData from '../PersonalData/PersonalData'
import UserData from '../UserData/UserData'
import DeliveryData from '../DeliveryData/DeliveryData'

function RegistrationForm({ CPFValidation, submitForm }) {
  const [stage, setStage] = useState(0)
  const [collectedData, setCollectedData] = useState({})
  useEffect(() => {
    console.log(">>>",collectedData)
  })
  const forms = [
    <UserData submitForm={collectData} />,
    <PersonalData submitForm={collectData} CPFValidation={CPFValidation} />,
    <DeliveryData submitForm={collectData} />
  ]

  function collectData(data) {
    setCollectedData({ ...collectData, ...data })
    next()
  }
  function next() {
    setStage(stage + 1)
  }

  return <>{forms[stage]}</>
}

export default RegistrationForm
