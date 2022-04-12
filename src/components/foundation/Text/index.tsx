import styled, { css } from 'styled-components'
import React from 'react'
import typographyVariants from '../../../theme/typographyVariants'
import propToStyle from '../../../theme/utils/propsToStyle'

interface Props {
  tag: 'p' | 'span' | 'h1' | 'h2' | 'h3' | any;
  variant: string;
  textAlign?: string | object;
  children: string | number | React.ReactNode;
  color?: string;
  name?: string;
  href?: string | object;
  padding?: string | object;
  margin?: string | object;
  paddingRight?: string | object;
  paddingLeft?: string | object;
  marginBottom?: string | object;
}

const smallestException = css`
  font-size: ${() => typographyVariants.smallestException.fontSize};
  font-weight: ${() => typographyVariants.smallestException.fontWeight};
  line-height: ${() => typographyVariants.smallestException.lineHeight};
`
const paragraph1 = css`
  font-size: ${() => typographyVariants.paragraph1.fontSize};
  font-weight: ${() => typographyVariants.paragraph1.fontWeight};
  line-height: ${() => typographyVariants.paragraph1.lineHeight};
`
const paragraph2 = css`
  font-size: ${() => typographyVariants.paragraph2.fontSize};
  font-weight: ${() => typographyVariants.paragraph2.fontWeight};
  line-height: ${() => typographyVariants.paragraph2.lineHeight};
`
const title = css`
  font-size: ${() => typographyVariants.title.fontSize};
  font-weight: ${() => typographyVariants.title.fontWeight};
  line-height: ${() => typographyVariants.title.lineHeight};
`
const subtitle = css`
  font-size: ${() => typographyVariants.subtitle.fontSize};
  font-weight: ${() => typographyVariants.subtitle.fontWeight};
  line-height: ${() => typographyVariants.subtitle.lineHeight};
`
const navbar = css`
  font-size: ${() => typographyVariants.title.fontSize};
  font-weight: ${() => typographyVariants.title.fontWeight};
  line-height: ${() => typographyVariants.title.lineHeight};
`

export const TextStyleVariants: Record<string, any> = {
  smallestException,
  paragraph1,
  paragraph2,
  title,
  subtitle,
  navbar
}

const TextBase = styled.span<Props>`
  ${({ variant }) => TextStyleVariants[variant]}
  ${propToStyle('color')}
  ${propToStyle('margin')}
  ${propToStyle('marginBottom')}
  ${propToStyle('padding')}
  ${propToStyle('paddingRight')}
  ${propToStyle('paddingLeft')}
`
// ;
export default function Text ({ variant, tag, children, ...props }: Props) {
  return (
    <TextBase
      variant={variant}
      as={tag}
      {...props}
    >
      {children}
    </TextBase>
  )
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1'
}
