import React from 'react';
import styled from 'styled-components';

type Props = {
  renderSidebar(): JSX.Element;
  renderMain(): JSX.Element;
}

const DashboardLayout: React.FC<Props> = ({ renderSidebar, renderMain }) => (
  <DashboardLayoutContainer>
    <DashboardLayoutSidebar>{renderSidebar()}</DashboardLayoutSidebar>
    <DashboardLayoutMain>{renderMain()}</DashboardLayoutMain>
  </DashboardLayoutContainer>
);

const DashboardLayoutContainer = styled.div`
  display: grid;
  grid-template:
    " sidebar main " auto
    /  auto  1fr;
`;

const DashboardLayoutSidebar = styled.div`
  grid-area: sidebar;
`;

const DashboardLayoutMain = styled.div`
  grid-area: main;
`;

export default DashboardLayout;
