import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { LayoutWrapper, MainWrapper } from './Layout.styles'
import GeneralMenu from '../GeneralMenu'
import MenuContext from '../../context/MenuContext'

const Layout: React.FC = ({ children }) => {
  const [value, setValue] = useState(localStorage.getItem("isopen") || "")

  const toggleValue = () => {
    if (value === 'open') {
      setValue('close')
    } else {
      setValue('open')
    }
    localStorage.setItem("isopen", value);
  }
  return (
    <LayoutWrapper>
      <MenuContext.Provider value={{ value, toggleValue }}>
        <Header />
        <GeneralMenu />
      </MenuContext.Provider>
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout
