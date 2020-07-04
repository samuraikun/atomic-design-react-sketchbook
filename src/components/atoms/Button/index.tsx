import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ title, onClick }) => {
  return (
    <AButton onClick={onClick}>{title}</AButton>
  )
}

const AButton = styled.button`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  min-width: 120px;
  height: 30px;
  font-size: 13px;
  font-weight: bold;
  line-height: 1;
  text-decoration: none;
  letter-spacing: .5px;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 3px;
  outline: none;
  transition: .3s background, .5s transform cubic-bezier(0, .94, .06, 1);;
  appearance: none;
  transform:  perspective(1000px) translateZ(0px);

  &:active{
    transform:  perspective(1000px) translateZ(-15px);
  }
`

export default Button
