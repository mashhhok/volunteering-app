import { Box } from '@mantine/core'
import React from 'react'
import AuthFormClient from './AuthFormClient'
import { authAction } from '../actions'

export const AuthForm = () => {
  return (
    <Box>
      <AuthFormClient action={authAction}/>
    </Box>
  )
}
