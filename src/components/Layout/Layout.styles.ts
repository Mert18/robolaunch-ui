import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 7vh auto auto;
  grid-template-areas:
    'header header'
    'menu main'
    'footer footer';
`

export const MainWrapper = styled.main`
  grid-area: main;
  border: 1px solid black;
`
