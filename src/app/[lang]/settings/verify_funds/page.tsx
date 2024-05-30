import { VerifyFunds } from '@/features/Settings/VerifyFunds'
import { IDictionary, Locale } from '@/shared/config/i18n.config'
import { getDictionary } from '@/shared/lib/utils/getDictionary'
import React from 'react'

const page = async ({params}: {params: {lang: Locale}}) => {
  const dict = await getDictionary(params.lang)
  return (
    <VerifyFunds dict={dict}/>
  )
}

export default page