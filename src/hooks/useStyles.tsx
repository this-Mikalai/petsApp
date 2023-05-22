import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../themeStyles/ThemeProvider';

export const useStyles = () => {
  const theme = useContext(ThemeContext);

  return theme;
};
