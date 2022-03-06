import React from 'react'
import Layout from '../../components/Layout/Layout'
import {
  InstancesWrapper,
  InstancesSidebar,
  InstancesTopbar,
  InstancesMain,
  TopbarMenu,
  SidebarMenu,
} from './Instances.styles'

const Instances: React.FC = () => {
  return (
    <Layout>
      <InstancesWrapper>
        <InstancesTopbar>
          <TopbarMenu></TopbarMenu>
        </InstancesTopbar>
        <InstancesSidebar>
          <SidebarMenu></SidebarMenu>
        </InstancesSidebar>
        <InstancesMain>INSTANCES OVERVIEW TAB</InstancesMain>
      </InstancesWrapper>
    </Layout>
  )
}

export default Instances
