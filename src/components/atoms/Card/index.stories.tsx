import React from 'react';
import styled from 'styled-components';
import Card from './index';

export default {
  title: 'Atom/Card',
  component: Card
}

export const Default = () => (
  <Card>
    <div>Card</div>
  </Card>
)

export const WithContent = () => (
  <Card>
    <ContentStyle>
      <p>CardTitle</p>
      <img src="https://cdn.pixabay.com/photo/2015/03/26/10/38/blue-691718_1280.jpg" alt="sample" width='200' height='100' />
    </ContentStyle>
  </Card>
)
const ContentStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

