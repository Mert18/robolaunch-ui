import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: 10px 40px auto 65px 10px;
  grid-template-rows: 1fr;
  grid-template-areas: '. menuicon nav profile .';
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
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
    height: 2px;
    width: 100%;
    margin: 0.2rem 0rem;
  }

  &:hover {
    cursor: pointer;
  }
  `
