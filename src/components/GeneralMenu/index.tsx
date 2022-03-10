import {useState} from "react";
import {
  GeneralMenuWrapper,
  MenuListTop,
  MenuListTopItem,
  MenuListBottom,
  StyledLink,
  MenuListBottomItem,
  MenuIcon,
  MenuRouteName,
  Logo,
  Image
} from './GeneralMenu.styles'
import { useContext } from 'react'
import MenuContext from '../../context/MenuContext'
import { useLocation } from 'react-router-dom'

const GeneralMenu = () => {
  const { value, toggleValue } = useContext(MenuContext);
  const [viewDropdown, setViewDropdown] = useState(false);
  const location = useLocation()

  return (
    <GeneralMenuWrapper isopen={value}>
      <Logo>
        {value === "open" ? <Image src="/icons/sidebar-logo.svg" alt="robolaunch" /> : <Image src="/icons/sidebar-min-logo.svg" alt="robolaunch" />} 
      </Logo>
      <MenuListTop>
        <MenuListTopItem active={location.pathname === '/' ? true : false}>
          <StyledLink to="/" isopen={value}>
            <MenuIcon
              src="/icons/sidebar-dashboard.svg"
              alt="dashboard"
              isopen={value}
            />
            <MenuRouteName>Dashboard</MenuRouteName>
          </StyledLink>
        </MenuListTopItem>

        <MenuListTopItem active={location.pathname === '/view' ? true : false}>
          <StyledLink to="/view" isopen={value}>
            <MenuIcon
              src="/icons/sidebar-view.svg"
              alt="view"
              isopen={value}
            />
            <MenuRouteName>View</MenuRouteName>
          </StyledLink>
        </MenuListTopItem>

        <MenuListTopItem active={location.pathname === '/management' ? true : false}>
          <StyledLink to="/management" isopen={value}>
            <MenuIcon
              src="/icons/sidebar-management.svg"
              alt="management"
              isopen={value}
            />
            <MenuRouteName>Management</MenuRouteName>
          </StyledLink>
        </MenuListTopItem>

        <MenuListTopItem active={location.pathname === '/development' ? true : false}>
          <StyledLink to="/development" isopen={value}>
            <MenuIcon
              src="/icons/sidebar-development.svg"
              alt="development"
              isopen={value}
            />
            <MenuRouteName>Development</MenuRouteName>
          </StyledLink>
        </MenuListTopItem>

        <MenuListTopItem
          active={location.pathname === '/settings' ? true : false}
        >
          <StyledLink to="/settings" isopen={value}>
            <MenuIcon
              src="/icons/sidebar-settings.svg"
              alt="settings"
              isopen={value}
            />
            <MenuRouteName>Settings</MenuRouteName>
          </StyledLink>
        </MenuListTopItem>
      </MenuListTop>

      <MenuListBottom>
        <MenuListBottomItem>
          <StyledLink to="/" isopen={value}>
            <MenuIcon
              src="/icons/sidebar-star.svg"
              alt="star"
              isopen={value}
            />
            <MenuRouteName>Favorite 1</MenuRouteName>
          </StyledLink>
        </MenuListBottomItem>

        <MenuListBottomItem>
          <StyledLink to="/" isopen={value}>
            <MenuIcon
              src="/icons/sidebar-star.svg"
              alt="home svg"
              isopen={value}
            />
            <MenuRouteName>Favorite 2</MenuRouteName>
          </StyledLink>
        </MenuListBottomItem>
      </MenuListBottom>
    </GeneralMenuWrapper>
  )
}

export default GeneralMenu
