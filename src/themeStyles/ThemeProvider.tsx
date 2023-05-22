import React, { createContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { darkMode } from './darkMode';
import { lightMode } from './lightMode';
import { GlobalStyles } from './globalStyles';

export const ThemeContext = createContext({ ...GlobalStyles, ...lightMode });

const ThemeProvider = ({ children }) => {
  const themeCurrent = useColorScheme();

  const themeValue = useMemo(() => {
    const selectedTheme = themeCurrent === 'light' ? lightMode : darkMode;
    return { ...GlobalStyles, ...selectedTheme };
  }, [themeCurrent]);

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
