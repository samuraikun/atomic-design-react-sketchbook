import React from 'react'
import { Meta } from '@storybook/react'
import { style } from 'typestyle'
import Card from './index'

export default {
  title: 'Atom/Card',
  component: Card
} as Meta

export const Default = () => (
  <Card>
    <div>Card</div>
  </Card>
)

export const WithContent = () => (
  <Card>
    <div className={contentStyle}>
      <p>CardTitle</p>
      <img src="https://cdn.pixabay.com/photo/2015/03/26/10/38/blue-691718_1280.jpg" alt="sample" width='200' height='100' />
    </div>
  </Card>
)

const contentStyle = style({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column'
})

