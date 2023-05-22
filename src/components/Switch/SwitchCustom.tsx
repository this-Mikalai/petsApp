import React, { FC, useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

type SwitchCustomT = {
  handleChange: (bool: boolean) => void;
};

const SwitchCustom: FC<SwitchCustomT> = ({ handleChange }) => {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => {
  //   setIsEnabled((previousState) => !previousState);
  //   handleChange(isEnabled);
  // };

  return (
    <Switch
    // trackColor={{ false: 'grey', true: 'yellow' }}
    // thumbColor={isEnabled ? 'pink' : 'green'}
    // ios_backgroundColor="#3e3e3e"
    // onValueChange={toggleSwitch}
    // value={isEnabled}
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

export default SwitchCustom;
