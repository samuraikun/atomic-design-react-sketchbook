import React from 'react';
import styled from 'styled-components';
import { Headline, Title, Body } from './index';

export default {
  title: 'Atom/Typography'
}

export const Typographies = () => {
  return (
    <Style>
      <Headline label='Headline' />
      <Title label='Title' />
      <Body label='Body' />
    </Style>
  )
}

const Style = styled.div`
  display: flex;
  flex-direction: column;
`;
