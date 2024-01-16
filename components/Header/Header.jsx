import React from 'react'
import Image from "next/image"
const Header = () => {
  return (
    <div>
        <Image src={"/images/logo.jpg"} width={100} height={100} alt='logo'/>
    </div>
  )
}

export  {Header}