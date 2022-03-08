import { HeaderWrapper, MenuIcon } from './Header.styles'
import { useContext } from 'react'

import MenuContext from '../../context/MenuContext'

const Header = () => {
  const { value, toggleValue } = useContext(MenuContext)

  const handleMenuStatus = () => {
    toggleValue()
  }

  return (
    <HeaderWrapper>
      <MenuIcon onClick={handleMenuStatus}>
        <div></div>
        <div></div>
        <div></div>
      </MenuIcon>
    </HeaderWrapper>
  )
}

export default Header
