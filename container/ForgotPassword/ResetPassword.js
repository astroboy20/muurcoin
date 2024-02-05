import React from 'react'
import { useSearchParams } from 'next/navigation'
import { ForgotContainer } from './RestWithEmail.style'

const ResetPassword = () => {
    const searchParams = useSearchParams()
    const token = searchParams.get("token")
    const email = searchParams.get("email")

    console.log("token",token)
    console.log("email",email)
  return (
    <>
    <ForgotContainer>
        token:{token}
        email:{email}
    </ForgotContainer>
    </>
  )
}

export default ResetPassword