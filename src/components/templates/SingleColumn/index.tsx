import React, { FC, ReactNode } from 'react';
import { style, media } from 'typestyle';

interface SingleColumnI {
  renderHeader(): ReactNode;
  renderMain(): ReactNode;
}

const SingleColumn: FC<SingleColumnI> = ({ renderHeader, renderMain }) => (
  <div className={singleColumStyle}>
    <div className={singleColumnHeader}>{renderHeader()}</div>
    <div className={singleColumnMain}>{renderMain()}</div>
  </div>
)

const singleColumStyle = style(
  {
    display: 'grid',
    gridTemplate: `
      "header header header" 100px
      "   .      .      .  " 20px
      "   .     main    .  " 1fr
      "   .      .      .  " minmax(80px, auto)
      / 100px 1fr 100px;
    `,
    height: '100vh'
  },
  media(
    { minWidth: '768px'},
    {
      gridTemplate: `
        'header header header' 50px
        '   .      .      .  ' 60px
        '   .     main    .  ' 1fr
        '   .      .      .  ' minmax(50px, auto)
        / 30px 1fr 30px;
      `
    }
  )
)

const singleColumnHeader = style({
  gridArea: 'header',
  borderBottom: '1px solid #f2f2f2',
  boxSizing: 'border-box'
})

const singleColumnMain = style({ gridArea: 'main' })

export default SingleColumn;
