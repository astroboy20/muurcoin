import React from 'react'
import { LayoutContainer } from './Layout.style'

const Layout = ({children}) => {
  return (
    <LayoutContainer>{children}</LayoutContainer>
  )
}

export  {Layout}