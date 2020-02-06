import React from 'react';

import ThemeContextProvider from './core/ThemeProvider';

import RootNavigator from './routes';

const App = () => {
  return (
    <ThemeContextProvider>
      <RootNavigator />
    </ThemeContextProvider>
  );
};

export default App;
