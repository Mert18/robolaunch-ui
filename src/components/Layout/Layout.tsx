import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { LayoutWrapper, MainWrapper } from './Layout.styles'
import GeneralMenu from '../GeneralMenu'

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <GeneralMenu />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout
