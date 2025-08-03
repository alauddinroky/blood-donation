import React, { Suspense } from 'react'
import LoginForm from '../components/LoginForm'

function page() {
  return (
    <Suspense fallback={<div className="text-white text-center mt-10">Loading...</div>}>
      <LoginForm />
    </Suspense>
  )
}

export default page