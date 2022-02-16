import React from 'react'
import PersonalData from '../PersonalData/PersonalData'
import UserData from '../UserData/UserData'
import DeliveryData from '../DeliveryData/DeliveryData'


function RegistrationForm( CPFValidation, submitForm) {
  return (
    <>
      <PersonalData CPFValidation={CPFValidation} submitForm={submitForm} />
      <UserData />
      <DeliveryData />
    </>
    
  )
}
export default RegistrationForm
