import React from 'react';
import { style } from 'typestyle';
import { colors } from '../../../utils/colors'

const Card: React.FC = ({ children }) => (
  <div className={cardStyle}>{children}</div>
);

const cardStyle = style({
  padding: 60,
  background: colors.monoC,
  borderRadius: 8,
  boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.1)'
})

export default Card;
