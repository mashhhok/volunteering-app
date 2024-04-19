import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
  redirect('/create_fundraiser/names')
}

export default page