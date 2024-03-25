import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
  redirect('/settings/details')
}

export default page