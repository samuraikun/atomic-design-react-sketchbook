import React from 'react';
import { style } from 'typestyle';
import SingleColumn from './index';

export default {
  title: 'Template/SingleColumn',
  component: SingleColumn
}

const headerStyle = style({
  display: 'flex',
  justifyContent: 'center'
})

const mainStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const Header = () => (
  <div className={headerStyle}>Header</div>
);

const Main = () => (
  <div className={mainStyle}>Main</div>
);

export const Default = () => (
  <SingleColumn
    renderHeader={Header}
    renderMain={Main}
  />
)
