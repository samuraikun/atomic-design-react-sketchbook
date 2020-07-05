import React from 'react';
import styled from 'styled-components';

const Card: React.FC = ({ children }) => (
  <CardStyle>{children}</CardStyle>
);
const CardStyle = styled.div`
  padding: 60px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
`;

export default Card;
