import React, { FC } from 'react';
import styled from 'styled-components';
import media from "styled-media-query";

interface SingleColumnI {
  renderHeader(): JSX.Element;
  renderMain(): JSX.Element;
}

const SingleColumn: FC<SingleColumnI> = ({ renderHeader, renderMain }) => (
  <TSingleColumn>
    <TSingleColumnHeader>{renderHeader()}</TSingleColumnHeader>
    <TSingleColumnMain>{renderMain()}</TSingleColumnMain>
  </TSingleColumn>
)

const TSingleColumn = styled.div`
  display: grid;
  grid-template:
    "header header header" 100px
    "   .      .      .  " 20px
    "   .     main    .  " 1fr
    "   .      .      .  " minmax(80px, auto)
    / 100px 1fr 100px;
  height: 100vh;

  ${media.lessThan("medium")`
    grid-template:
      'header header header' 50px
      '   .      .      .  ' 60px
      '   .     main    .  ' 1fr
      '   .      .      .  ' minmax(50px, auto)
      / 30px 1fr 30px;
  `}
`;

const TSingleColumnHeader = styled.div`
  box-sizing: border-box;
  grid-area: header;
  border-bottom: 1px solid #f2f2f2;
`;

const TSingleColumnMain = styled.div`
  grid-area: main;
`;

export default SingleColumn;
