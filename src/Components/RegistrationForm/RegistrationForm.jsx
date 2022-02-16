import React from 'react'
import PersonalData from '../PersonalData/PersonalData'
import UserData from '../UserData/UserData'


function RegistrationForm( CPFValidation, submitForm) {
  return (
    <>
      <PersonalData CPFValidation={CPFValidation} submitForm={submitForm} />
      <UserData />
    </>
    
  )
}
export default RegistrationForm
