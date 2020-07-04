import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from './index'

export default {
  title: 'Button',
  size: 'medium',
  component: Button
}

export const Default = () => <Button title='Button' onClick={action('clicked!')} />
