import { HeaderWrapper, MenuIcon, Image, User, FAQ, Notifications, Profile} from './Header.styles'
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
        <Image src="/icons/hamburger.svg" alt="menu" />
      </MenuIcon>
      <User>
        <FAQ>
          <Image />
        </FAQ>
        <Notifications>
          <Image />
        </Notifications>
        <Profile>
          <Image />
        </Profile>
      </User>
    </HeaderWrapper>
  )
}

export default Header
