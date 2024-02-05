import React from 'react'
import { useSearchParams } from 'next/navigation'

const ResetPassword = () => {
    const searchParams = useSearchParams()
    const token = searchParams.get("token")
    const email = searchParams.get("email")

    console.log("token",token)
    console.log("email",email)
  return (
    <>ResetPassword</>
  )
}

export default ResetPassword