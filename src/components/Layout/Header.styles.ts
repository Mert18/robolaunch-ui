import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: 10px 40px auto 65px 10px;
  grid-template-rows: 1fr;
  grid-template-areas: '. menuicon nav profile .';
  border: 2px solid black;
`

