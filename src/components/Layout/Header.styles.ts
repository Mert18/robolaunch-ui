import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: 10px 40px auto;
  grid-template-rows: 66px;
  grid-template-areas: '. menuicon user';
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
  z-index: 99;
`


export const Image = styled.img`
  max-width: 100%;
`

export const Profile = styled.div`
  max-width: 100%;
`

export const Notifications = styled.div`
  max-width: 100%;
`

export const FAQ = styled.div`

  max-width: 100%;
`


export const User = styled.div`
  grid-area: user; 
  border: 2px solid black;
  justify-self: flex-end;
`;


export const MenuIcon = styled.div`
  grid-area: menuicon;
  display: flex;
  justify-content: center;
  align-content: center;

  &:hover {
    cursor: pointer;
  }
  `
