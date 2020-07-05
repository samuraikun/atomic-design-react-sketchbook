import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
}

const LabelText: React.FC<Props> = ({ text }) => (
  <LabelTextStyle>{text}</LabelTextStyle>
);
const LabelTextStyle = styled.span`
  font-size: 13px;
  font-weight: bold;
  line-height: 1.2;
  color: #333333;
`;

export default LabelText;
