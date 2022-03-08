import styled from 'styled-components'
import { Link } from 'react-router-dom'


type MenuProps = {
  isopen: string;
}

export const GeneralMenuWrapper = styled.div<MenuProps>`
  grid-area: menu;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 80vh;
  width: 300px;
  background: var(--white);
  transition: width .3s ease;
  border: 2px solid black;

  ${props => props.isopen === "close" ? `` : `
    width: 60px;
    transition: width .3s ease;
  ` 
  }
`


export const MenuListTop = styled.ul`
  padding: 0;
`

export const MenuListTopItem = styled.li`
  display: flex;
  min-height: 6vh;
  transition: all 0.2s ease;
  &:hover {
    background: var(--white-secondary);
    transition: all 0.2s ease;
  }
`

type LinkProps = {
  isopen: any;
}

export const StyledLink = styled(Link)<LinkProps>`
  flex-grow: 1;
  color: var(--black);
  display: flex;
  padding: 0.8rem;
  align-items: center;
  text-decoration: none;

  & > img {
    margin-right: .4rem;
  }

  ${props => props.isopen === "close" ? `
  ` : `
    transition: visibility .2s ease;
    & > p {
    visibility: hidden;
    flex-grow: 0;
  }
` }
`

export const MenuListBottom = styled.ul`
  padding: 0;
`

export const MenuListBottomItem = styled.li`
  display: flex;
  min-height: 6vh;
  transition: all .2s ease;
  &:hover{
    background: var(--white-secondary);
    transition: all .2s ease;
  }
`
