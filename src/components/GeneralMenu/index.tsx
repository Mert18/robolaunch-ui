import {
  GeneralMenuWrapper,
  MenuListTop,
  MenuListTopItem,
  MenuListBottom,
  StyledLink,
  MenuListBottomItem,
  MenuIcon,
  MenuRouteName,
} from './GeneralMenu.styles'
import { useContext, useEffect } from 'react'
import MenuContext from '../../context/MenuContext'
import { useLocation } from 'react-router-dom'

const GeneralMenu = () => {
  const { value, toggleValue } = useContext(MenuContext)
  const location = useLocation()

  return (
    <GeneralMenuWrapper isopen={value}>
      <MenuListTop>
        <MenuListTopItem active={location.pathname === '/' ? true : false}>
          <StyledLink to="/" isopen={value}>
            <MenuIcon src="/icons/home.svg" alt="home svg" width="36px" isopen={value}/>
            <MenuRouteName>Home</MenuRouteName>
          </StyledLink>
        </MenuListTopItem>

        <MenuListTopItem active={location.pathname === '/fleet' ? true : false}>
          <StyledLink to="/fleet" isopen={value}>
            <MenuIcon src="/icons/home.svg" alt="home svg" width="36px" isopen={value} />
            <MenuRouteName>Fleet</MenuRouteName>
          </StyledLink>
        </MenuListTopItem>

        <MenuListTopItem active={location.pathname === '/robot' ? true : false}>
          <StyledLink to="/robot" isopen={value}>
            <MenuIcon src="/icons/home.svg" alt="home svg" width="36px" isopen={value} />
            <MenuRouteName>Robot</MenuRouteName>
          </StyledLink>
        </MenuListTopItem>

        <MenuListTopItem active={location.pathname === '/task' ? true : false}>
          <StyledLink to="/task" isopen={value}>
            <MenuIcon src="/icons/home.svg" alt="home svg" width="36px" isopen={value} />
            <MenuRouteName>Task Management</MenuRouteName>
          </StyledLink>
        </MenuListTopItem>

        <MenuListTopItem
          active={location.pathname === '/config' ? true : false}
        >
          <StyledLink to="/config" isopen={value}>
            <MenuIcon src="/icons/home.svg" alt="home svg" width="36px" isopen={value} />
            <MenuRouteName>Config</MenuRouteName>
          </StyledLink>
        </MenuListTopItem>

        <MenuListTopItem
          active={location.pathname === '/accounting' ? true : false}
        >
          <StyledLink to="/accounting" isopen={value}>
            <MenuIcon src="/icons/home.svg" alt="home svg" width="36px" isopen={value} />
            <MenuRouteName>Accounting</MenuRouteName>
          </StyledLink>
        </MenuListTopItem>

        <MenuListTopItem
          active={location.pathname === '/performance' ? true : false}
        >
          <StyledLink to="/performance" isopen={value}>
            <MenuIcon src="/icons/home.svg" alt="home svg" width="36px" isopen={value} />
            <MenuRouteName>Performance</MenuRouteName>
          </StyledLink>
        </MenuListTopItem>

        <MenuListTopItem
          active={location.pathname === '/security' ? true : false}
        >
          <StyledLink to="/security" isopen={value}>
            <MenuIcon src="/icons/home.svg" alt="home svg" width="36px" isopen={value} />
            <MenuRouteName>Security</MenuRouteName>
          </StyledLink>
        </MenuListTopItem>
      </MenuListTop>

      <MenuListBottom>
        <MenuListBottomItem>
          <StyledLink to="/security" isopen={value}>
            <MenuIcon src="/icons/home.svg" alt="home svg" width="36px" isopen={value} />
            <MenuRouteName>Favorite 1</MenuRouteName>
          </StyledLink>
        </MenuListBottomItem>

        <MenuListBottomItem>
          <StyledLink to="/security" isopen={value}>
            <MenuIcon src="/icons/home.svg" alt="home svg" width="36px" isopen={value} />
            <MenuRouteName>Favorite 2</MenuRouteName>
          </StyledLink>
        </MenuListBottomItem>
      </MenuListBottom>
    </GeneralMenuWrapper>
  )
}

export default GeneralMenu
