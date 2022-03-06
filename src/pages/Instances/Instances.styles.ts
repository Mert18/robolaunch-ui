import styled from 'styled-components'

export const InstancesWrapper = styled.div`
  min-height: 80vh;
  border: 2px solid black;
  display: grid;
  grid-template-columns: 170px auto;
  grid-template-rows: 70px auto;
  grid-template-areas:
    'topbar topbar'
    'sidebar main';

  @media (max-width: 1100px) {
    grid-template-rows: 70px auto 150px;
    grid-template-areas:
      'topbar topbar'
      'main main'
      'sidebar sidebar';
  }
`

export const InstancesSidebar = styled.div`
  border: 2px solid black;
  grid-area: sidebar;
`
export const InstancesTopbar = styled.div`
  border: 2px solid black;
  grid-area: topbar;
`
export const InstancesMain = styled.div`
  border: 2px solid black;
  grid-area: main;
`
export const TopbarMenu = styled.div`
  border: 2px solid black;
`
export const SidebarMenu = styled.div`
  border: 2px solid black;
`
