import React from 'react';
import { style } from 'typestyle';
import { colors } from '../../../utils/colors'

type colorType = 'primary' | 'secondory' | 'danger';
type sizeType = 'small' | 'medium' | 'large';
type Props = {
  title: string;
  color: colorType;
  size: sizeType;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ title, color, size, onClick }) => {
  return (
    <div className={buttonClass(color, size)} onClick={onClick}>{title}</div>
  )
}

const buttonColor = (color: colorType) => {
  const style = {
    primary: {
      color: colors.monoC,
      backgroundColor: colors.green
    },
    secondory: {
      color: colors.monoC,
      backgroundColor: colors.orange
    },
    danger: {
      color: colors.monoC,
      backgroundColor: colors.red
    }
  }

  return style[color]
}
const buttonSize = (size: sizeType) => {
  const style  = {
    small: {
      minWidth: 120,
      height: 30,
      fontSize: 14
    },
    medium: {
      minWidth: 120,
      height: 40,
      fontSize: 14
    },
    large: {
      minWidth: 200,
      height: 48,
      fontSize: 16
    }
  }

  return style[size]
}

const buttonClass = (color: colorType, size: sizeType) => (
  style(
    buttonColor(color),
    buttonSize(size),
    {
      boxSizing: 'border-box',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px',
      fontWeight: 'bold',
      lineHeight: 1,
      textDecoration: 'none',
      letterSpacing: '.5px',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      userSelect: 'none',
      border: '1px solid transparent',
      borderRadius: 3,
      outline: 'none',
      transition: '.3s background, .5s transform cubic-bezier(0, .94, .06, 1)',
      appearance: 'none',
      transform: 'perspective(1000px) translateZ(0px)',
      $nest: {
        '&:active': { transform: 'perspective(1000px) translateZ(-15px)' }
      }
    }
  )
)

export default Button
