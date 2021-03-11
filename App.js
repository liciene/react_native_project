import React from 'react';
import Navigator from './src/navigator';
import {Provider as PaperProvider} from 'react-native-paper';
import theme from './src/styles/theme';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Navigator />
    </PaperProvider>
  );
};

export default App;
