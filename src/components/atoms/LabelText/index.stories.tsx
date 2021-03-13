import React from 'react';
import { Meta } from '@storybook/react'
import LabelText from './index';

export default {
  title: 'Atom/LabelText',
  component: LabelText
} as Meta

export const Label: React.VFC<{}> = () => (
  <LabelText text='日本語 & alphabet' />
)
