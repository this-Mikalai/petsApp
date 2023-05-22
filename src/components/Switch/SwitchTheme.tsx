import React, { FC, useState } from 'react';
import { Switch, StyleSheet, useColorScheme } from 'react-native';
import { useAppDispatch } from '../../hooks/reduxHook';
import { toggleTheme } from '../../store/slices/themeColorSlice';

const SwitchTheme: FC = () => {
  // const themeCurrent = useColorScheme();
  // const isLightTheme = themeCurrent === 'light';
  // const dispatch = useAppDispatch();
  // const toggleSwitch = () => {
  //   dispatch(
  //     isLightTheme
  //       ? toggleTheme({ theme: 'light' })
  //       : toggleTheme({ theme: 'dark' })
  //   );
  // };

  return (
    <Switch
    // trackColor={{ false: 'grey', true: 'yellow' }}
    // thumbColor={isLightTheme ? 'pink' : 'green'}
    // ios_backgroundColor="#3e3e3e"
    // onValueChange={toggleSwitch}
    // value={isLightTheme}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SwitchTheme;
