import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 7vh auto auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
`

export const MainWrapper = styled.main`
  grid-area: main;
  border: 3px solid black;
`
