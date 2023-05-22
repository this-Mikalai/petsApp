import * as React from 'react';
import 'localstorage-polyfill';
import { Provider } from 'react-redux';
import MainNavigation from './src/navigation/MainNavigation';
import { store } from './src/store/store';
import ThemeProvider from './src/themeStyles/ThemeProvider';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainNavigation />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
