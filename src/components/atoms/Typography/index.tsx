import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
}

export const Headline: FC<Props> = ({ label }) => (
  <HeadlineStyle>{label}</HeadlineStyle>
);
const HeadlineStyle = styled.div`
  font-size: 35px;
  font-weight: bold;
`;

export const Title: FC<Props> = ({ label }) => (
  <TitleStyle>{label}</TitleStyle>
);
const TitleStyle = styled.div`
  font-size: 25px;
`;

export const Body: FC<Props> = ({ label }) => (
  <BodyStyle>{label}</BodyStyle>
)
const BodyStyle = styled.div`
  font-size: 13px;
`;
