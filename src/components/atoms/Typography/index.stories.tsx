import React from 'react';
import { Meta } from '@storybook/react'
import styled from 'styled-components';
import { Headline, Title, Body } from './index';

export default {
  title: 'Atom/Typography'
} as Meta

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
