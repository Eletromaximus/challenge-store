import breakpoints from './breakpoints'
import typographyVariants from './typographyVariants'

export const dark = {
  title: 'dark',

  colors: {
    text: '#fafdf6',
    primary: '#D61616',
    secundary: '#FCFCFC',

    background: '#0A0A0A'
  },

  breakpoints,
  typographyVariants,
  fontFamily: '\'Lato\', sans-serif'
}

export const light = {
  title: 'light',

  colors: {
    text: '#211B1B',
    primary: '#3D42D4',
    secundary: '#FCFCFC',

    background: '#F0EEED'
  },

  breakpoints,
  typographyVariants,
  fontFamily: '\'Lato\', sans-serif'
}
