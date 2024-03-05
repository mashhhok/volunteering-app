import React from 'react'
import { RegisterFormClient } from './RegisterFormClient'
import { registerAction } from '../actions'

export const RegisterForm = () => {
  return (
    <RegisterFormClient action={registerAction} />
  )
}
