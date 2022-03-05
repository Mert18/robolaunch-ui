import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  grid-area: header;
  border: 2px solid black;
  display: grid;
  grid-template-columns: 10px 55px auto 65px 10px;
  grid-template-rows: 1fr;
  grid-template-areas: '. menuicon nav profile .';
`

export const MenuIcon = styled.div`
  grid-area: menuicon;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  div {
    :first-child {
      width: 100%;
    }
    :nth-child(even) {
      width: 75%;
    }
    :last-child {
      width: 50%;
    }
    background: var(--black);
    height: 3px;
    width: 100%;
    margin: 0.2rem 0rem;
  }
`
