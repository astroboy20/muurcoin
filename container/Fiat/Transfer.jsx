import { useOptionContext } from '@/feature/context/option-context';
import React from 'react'

const Transfer = () => {
    const { option } = useOptionContext();
  return (
    <div>{option === "Transfer" && (
        <>
            kgfku
        </>
    )}</div>
  )
}

export  {Transfer}