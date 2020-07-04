import React from 'react';
import styled from 'styled-components';
import SingleColumn from './index';

export default {
  title: 'Template/SingleColumn',
  component: SingleColumn
}

const Header = () => (
  <StyleHeader>Header</StyleHeader>
);
const StyleHeader = styled.header`
  display: flex;
  justify-content: center;
`;

const Main = () => (
  <MainStyle>Main</MainStyle>
);
const MainStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Default = () => <SingleColumn renderHeader={Header} renderMain={Main} />
