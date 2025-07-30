import 'styled-components';
import type { AppTheme } from './themes';

declare module 'styled-components' {
  // Augment DefaultTheme to be our AppTheme
  export interface DefaultTheme extends AppTheme {}
}
