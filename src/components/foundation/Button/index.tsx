import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import propToStyle from '../../../theme/utils/propsToStyle'
import { TextStyleVariants } from '../Text'
interface IButton {
  variant: string,
  target?: string,
  children: ReactNode,
  onClick?: () => void,
  href?: string,
  paddingRight?: string | object,
  padding?: string | object | number,
  margin?: string | object | number,
  name?: string,
  color?: string,
  width?: string,
  style?: object,
  disable?: boolean
}

const ButtonBase = styled.button<IButton>`
 
  ${(props) => TextStyleVariants[props.variant]};
  ${propToStyle('color')};
  ${propToStyle('paddingRight')};
  ${propToStyle('margin')};
  ${propToStyle('padding')};
  ${propToStyle('width')};

  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  border: none;
`
export default function Button ({
  variant,
  children,
  href,
  ...props
}: IButton) {
  if (href) {
    return <Link to={href}>
      <ButtonBase variant={variant} {...props} >
        {children}
      </ButtonBase>
    </Link>
  } else {
    return (
      <ButtonBase variant={variant} {...props} >
        {children}
      </ButtonBase>
    )
  }
}

Button.defaultProps = {
  variant: 'paragraph1',
  target: '_blanck'
}
