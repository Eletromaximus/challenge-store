import 'styled-components'
// import { ITypography } from './src/theme/typographyVariants'
import { IBreakpoints } from './src/theme/breakpoints'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    fontFamily: string;
    colors: {
      text: string;
      primary: string;
      secundary: string;

      background: string;
    };
    breakpoints: IBreakpoints;
    // typographyVariants: ITypography;
  }
}
