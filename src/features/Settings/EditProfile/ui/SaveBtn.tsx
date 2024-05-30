'use client'
import { LangContext } from '@/app/[lang]/LangProvider'
import { colors } from '@/shared/enums'
import { BlurButton } from '@/shared/ui'
import React, { useContext } from 'react'

export const SaveBtn = () => {
  const dict = useContext(LangContext)

  return (
    <BlurButton color={colors.violet}>{dict.settings_process.show_settings.save}</BlurButton>
  )
}
