import React from 'react';
import { Meta } from '@storybook/react'
import styled from 'styled-components';
import DashboardLayout from './index';

export default {
  title: 'Template/DashboardLayout',
  component: DashboardLayout
} as Meta

export const Dashboard: React.VFC<{}> = () => (
  <DashboardLayout
    renderSidebar={Sidebar}
    renderMain={Main}
  />
);

const Sidebar = () => (
  <SidebarStyle>
    <div>
      <ItemStyle>item1</ItemStyle>
    </div>
    <div>
      <ItemStyle>item2</ItemStyle>
    </div>
    <div>
      <ItemStyle>item3</ItemStyle>
    </div>
  </SidebarStyle>
);
const SidebarStyle = styled.div`
  width: 15vw;
  height: 100vh;
  background-color: #43425D;
  padding: 5px 0 0 10px;
`;

const Main = () => (
  <MainStyle>
    <h1>Main</h1>
  </MainStyle>
);
const MainStyle = styled.div`
  padding: 50px;
`;

const ItemStyle = styled.p`
  color: #ffff;
  font-size: 15px;
  font-weight: bold;
`;
