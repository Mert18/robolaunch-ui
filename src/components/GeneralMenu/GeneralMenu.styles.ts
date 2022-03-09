import styled from 'styled-components'
import { Link } from 'react-router-dom'

type MenuProps = {
  isopen: string
}

export const GeneralMenuWrapper = styled.div<MenuProps>`
  grid-area: menu;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 132px auto auto;
  grid-template-areas: "logo"
  "mainmenu"
  "favorites"
  ;
  min-height: 80vh;
  width: 286px;
  background: var(--white);
  transition: all .1s;


  ${(props) =>
    props.isopen === 'open'
      ? ``
      : `
      width: 66px;
      box-shadow: inset 0px 0px 7.5px rgba(0, 0, 0, 0.1);
  `}
`

export const Logo = styled.div`
  grid-area: logo;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
    
`

export const StyledLink = styled(Link)<LinkProps>`
  color: var(--black);
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  width: 100%;

  ${(props) =>
    props.isopen === 'open'
      ? `
  `
      : `
    & > p {
    display: none;
  }
`}

`


export const MenuIcon = styled.img<MenuProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${props => props.isopen === "close" && `
`};
`

export const MenuRouteName = styled.p``

export const MenuListTop = styled.ul`
  padding: 0;
`

type ListItemProps = {
  active: boolean
}
export const MenuListTopItem = styled.li<ListItemProps>`
  display: flex;
  min-height: 6vh;
  transition: all 0.2s ease;
  margin-bottom: .2rem;
  &:hover {
    background: var(--white-secondary);
    transition: all 0.2s ease;
  }

  ${(props) =>
    props.active &&
    `
        box-shadow: inset 0px 0px 7.5px rgba(0, 0, 0, 0.1);

  `};
`

type LinkProps = {
  isopen: any
}


export const MenuListBottom = styled.ul`
  padding: 0;
`

export const MenuListBottomItem = styled.li`
  display: flex;
  min-height: 6vh;
  transition: all 0.2s ease;
  margin-bottom: .2rem;
  &:hover {
    background: var(--white-secondary);
    transition: all 0.2s ease;
  }
`
