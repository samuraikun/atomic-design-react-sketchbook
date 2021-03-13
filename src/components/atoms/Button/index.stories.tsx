import React from 'react'
import { Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './index'

export default {
  title: 'Atom/Button',
  component: Button
} as Meta

export const Default: React.VFC<{}> = () => (
  <Button
    title='Button'
    color='primary'
    size='medium'
    onClick={action('clicked!')}
  />
)
