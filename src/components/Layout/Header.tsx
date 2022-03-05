import React, { useEffect, useState } from 'react'
import { HeaderWrapper, MenuIcon } from './Header.styles'
import { useLocation } from 'react-router-dom'
import GeneralMenu from '../GeneralMenu'

const Header = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuStatus = () => {
    setIsOpen(true)
  }
  useEffect(() => {
    console.log(location)
  }, [location])
  return (
    <HeaderWrapper>
      <MenuIcon onClick={handleMenuStatus}>
        <div></div>
        <div></div>
        <div></div>
      </MenuIcon>
      <GeneralMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <div></div>
      <div></div>
    </HeaderWrapper>
  )
}

export default Header
