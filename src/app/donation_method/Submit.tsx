import { colors } from '@/shared/enums'
import { Button } from '@mantine/core'
import React from 'react'

export const Submit = ({disabled}: {disabled: boolean}) => {
  return (
    <Button
          disabled={disabled}
          size="lg"
          fullWidth
          style={{color: colors.white}}
          bg={disabled ? colors.lightViolet : colors.violet}
          type='submit'
        >
          Next
        </Button>
  )
}
