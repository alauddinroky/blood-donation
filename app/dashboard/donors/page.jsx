import { redirect } from 'next/navigation';
import DonorList from '../../components/DonorList'
import React from 'react'
import { cookies } from 'next/headers';
import { verifyToken } from '../../../lib/auth';


async function DonorListPage() {
  const cookiesStore = await cookies()
const token = cookiesStore.get('token')?.value
const user = token ? verifyToken(token): null
if(!user){
  redirect(`/login?msg=${encodeURIComponent('Login Before Get Access')}`)
  // redirect('/login')
}
  return (
    <DonorList />
  )
}

export default DonorListPage