import React from 'react'
import styled from 'styled-components'
import propToStyle from '../../../theme/utils/propsToStyle'
import { TextStyleVariants } from '../Text'
// import get from 'lodash/get'

interface IButton {
  variant: string;
  target?: string;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  paddingRight?: string | object;
  padding?: string | object | number;
  margin?: string | object | number;
  name?: string;
  color?: string;
  width?: string;
  style?: object;
}

const ButtonBase = styled.button<IButton>`
 
  ${(props) => TextStyleVariants[props.variant]};
  ${propToStyle('color')};
  ${propToStyle('paddingRight')};
  ${propToStyle('margin')};
  ${propToStyle('padding')};
  ${propToStyle('width')};

  // color: ${({ theme }) => theme.colors.secundary};
  background-color: transparent;
  border: none;
`
// color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)}
export default function Button ({ variant, children, ...props }: IButton) {
  return (
    <ButtonBase variant={variant} {...props} >
      {children}
    </ButtonBase>
  )
}

Button.defaultProps = {
  variant: 'paragraph1',
  target: '_blanck'
}
