import { useState } from 'react'
import { HeaderWrapper, MenuIcon } from './Header.styles'
import GeneralMenu from '../GeneralMenu'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuStatus = () => {
    setIsOpen(true)
  }
  return (
    <HeaderWrapper>
      <MenuIcon onClick={handleMenuStatus}>
        <div></div>
        <div></div>
        <div></div>
      </MenuIcon>
      <GeneralMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <div></div>
    </HeaderWrapper>
  )
}

export default Header
