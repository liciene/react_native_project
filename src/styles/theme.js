import {DefaultTheme} from 'react-native-paper';

import colors from './colors';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    primary: colors.primary,
    accent: colors.accent,
    text: colors.text,
  },
};

export default theme;
