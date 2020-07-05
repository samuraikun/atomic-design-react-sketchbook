import React, { InputHTMLAttributes} from 'react';
import styled from 'styled-components';

const Input: React.FC<InputHTMLAttributes<any>> = props => (
  <InputStyle
    type={props.type}
    required={props.required}
    value={props.value}
    name={props.name}
    placeholder={props.placeholder}
    min={props.min}
    max={props.max}
    minLength={props.minLength}
    maxLength={props.maxLength}
    autoComplete={props.autoComplete}
    disabled={props.disabled}
    readOnly={props.readOnly}
    pattern={props.pattern}
    onChange={props.onChange}
  />
);
const InputStyle = styled.input`
  box-sizing: border-box;
  width: 100%;
  min-height: 40px;
  padding: 0 10px;
  font-size: 14px;
  color: #111111;
  letter-spacing: .4px;
  background-color: #ffffff;
  border: solid 1px #cccccc;
  border-radius: 3px;
  outline: none;
  transition: .3s;

  &:focus {
    border-color: #333333;
    box-shadow: 0 2px 5px 0 rgba(48, 45, 30, .1);
  }
  &:disabled {
    color: #999999;
    cursor: not-allowed;
    background-color: #f8f8f8;
    border-color: #eeeeee;
  }
  &::placeholder {
    color: #999999;
  }
  &::-ms-clear {
    height: 14px;
  }
`;

export default Input;
