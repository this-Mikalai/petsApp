import { FC } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

type ButtonT = {
  onPress: () => void;
  colorsArr?: string[];
  title: string;
};

const Button: FC<ButtonT> = ({ onPress, colorsArr, title }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colorsArr[1] || 'yellow'}
      style={{ backgroundColor: colorsArr[0] || 'red' }}
    >
      <Text>{title}</Text>
    </TouchableHighlight>
  );
};

export default Button;
