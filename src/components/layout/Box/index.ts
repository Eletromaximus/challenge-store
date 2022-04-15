import styled from 'styled-components'
import propToStyle from '../../../theme/utils/propsToStyle'

interface IBox {
  display?: string | object,
  flexDirection?: string | object,
  justifyContent?: string | object,
  flex?: string | object,
  flexWrap?: string | object,
  backgroundImage?: string | object,
  backgroundRepeat?: string | object,
  backgroundPosition?: string | object,
  backgroundColor?: string | object,
  boxShadown?: string | object,
  padding?: string | object,
  width?: string | object | number,
  height?: string | object | number,
  alignItems?: string | object
  border?: string | object
  margin?: string | object
}

export const Box = styled.div<IBox>`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('alignItems')}
  ${propToStyle('boxShadow')}
  ${propToStyle('padding')}
  ${propToStyle('width')}
  ${propToStyle('height')}
  ${propToStyle('border')}
  ${propToStyle('margin')}
`
