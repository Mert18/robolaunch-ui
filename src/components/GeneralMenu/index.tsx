import {
  GeneralMenuWrapper,
  MenuListTop,
  MenuListTopItem,
  MenuListBottom,
  StyledLink,
  MenuListBottomItem,
} from './GeneralMenu.styles'
import { useContext } from 'react'
import MenuContext from '../../context/MenuContext'

const GeneralMenu = () => {
  const { value, toggleValue } = useContext(MenuContext)

  return (
    <GeneralMenuWrapper isopen={value}>
      <MenuListTop>
        <MenuListTopItem>
          <StyledLink to="/" isopen={value}>
            <img src="/icons/home.svg" alt="home svg" width="30px" />
            <p>Home</p>
          </StyledLink>
        </MenuListTopItem>

        <MenuListTopItem>
          <StyledLink to="/fleet" isopen={value}>
            <img src="/icons/home.svg" alt="home svg" width="30px" />
            <p>Fleet</p>
          </StyledLink>
        </MenuListTopItem>

        <MenuListTopItem>
          <StyledLink to="/robot" isopen={value}>
            <img src="/icons/home.svg" alt="home svg" width="30px" />
            <p>Robot</p>
          </StyledLink>
        </MenuListTopItem>

        <MenuListTopItem>
          <StyledLink to="/task" isopen={value}>
            <img src="/icons/home.svg" alt="home svg" width="30px" />

            <p>Task Management</p>
          </StyledLink>
        </MenuListTopItem>

        <MenuListTopItem>
          <StyledLink to="/config" isopen={value}>
            <img src="/icons/home.svg" alt="home svg" width="30px" />

            <p>Config</p>
          </StyledLink>
        </MenuListTopItem>

        <MenuListTopItem>
          <StyledLink to="/accounting" isopen={value}>
            <img src="/icons/home.svg" alt="home svg" width="30px" />

            <p>Accounting</p>
          </StyledLink>
        </MenuListTopItem>

        <MenuListTopItem>
          <StyledLink to="/performance" isopen={value}>
            <img src="/icons/home.svg" alt="home svg" width="30px" />

            <p>Performance</p>
          </StyledLink>
        </MenuListTopItem>

        <MenuListTopItem>
          <StyledLink to="/security" isopen={value}>
            <img src="/icons/home.svg" alt="home svg" width="30px" />

            <p>Security</p>
          </StyledLink>
        </MenuListTopItem>
      </MenuListTop>

      <MenuListBottom>
        <MenuListBottomItem>
          <StyledLink to="/security" isopen={value}>
            <img src="/icons/home.svg" alt="home svg" width="30px" />

            <p>Favorite 1</p>
          </StyledLink>
        </MenuListBottomItem>

        <MenuListBottomItem>
          <StyledLink to="/security" isopen={value}>
            <img src="/icons/home.svg" alt="home svg" width="30px" />

            <p>Favorite 2</p>
          </StyledLink>
        </MenuListBottomItem>
      </MenuListBottom>
    </GeneralMenuWrapper>
  )
}

export default GeneralMenu
