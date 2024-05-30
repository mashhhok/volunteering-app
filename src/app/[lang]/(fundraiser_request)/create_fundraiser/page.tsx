import { redirect } from 'next/navigation'

const page = () => {
  redirect('/create_fundraiser/names')
}

export default page