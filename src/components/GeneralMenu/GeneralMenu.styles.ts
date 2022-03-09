import styled from 'styled-components'
import { Link } from 'react-router-dom'

type MenuProps = {
  isopen: string
}

export const GeneralMenuWrapper = styled.div<MenuProps>`
  grid-area: menu;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 80vh;
  width: 270px;
  background: var(--white);
  transition: .1s;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);


  ${(props) =>
    props.isopen === 'open'
      ? ``
      : `
    width: 65px;
  `}
`

export const StyledLink = styled(Link)<LinkProps>`
  color: var(--black);
  display: flex;
  padding: 0.8rem;
  align-items: center;
  text-decoration: none;
  position: relative;
  width: 100%;
  & > img {
    margin-right: 0.4rem;
  }

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
  box-shadow: inset 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
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
