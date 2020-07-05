import React from 'react';
import styled from 'styled-components';
import LabelText from '../../atoms/LabelText/index';

type Props = {
  title: string;
  helpMessage?: string;
} & React.ReactNode

const InputSet: React.FC<Props> = ({ children, title, helpMessage }) => (
  <MInputSet>
    <MInputSetTitle text={title} />
    {helpMessage && <HelpText>help message</HelpText>}
    <MInputSetInputs>
      {children}
    </MInputSetInputs>
  </MInputSet>
);
const MInputSet = styled.div`
  display: grid;
  grid-template:
    " title required  .    help    help " 13px
    "  .       .      .      .       .  " 10px
    "inputs  inputs inputs inputs inputs" auto
    " vm      vm      vm     vm     vm  " auto
    / auto    auto   5px    auto    1fr;

  @media(max-width: 480px) {
    grid-template:
      " title    .     " 13px
      "  .       .     " 10px
      "inputs  inputs  " auto
      " help    help   " auto
      "  vm     vm     " auto
      / auto    1fr;
  }
`;

const MInputSetTitle = styled(LabelText)`
  grid-area: title;
  align-self: center;
  transition: .3s cubic-bezier(0, .94, .06, 1);
`;

const MInputSetInputs = styled.div`
  grid-area: inputs;
`;

const HelpText = styled.span`
  display: inline-block;
  padding-bottom: 1px;
  font-size: 12px;
  color: #666666;
  grid-area: help;
  align-self: center;
  @media(max-width: 480px) {
    margin-top: 6px;
    line-height: 1.4;
  }
`;

export default InputSet;
