import { Dimensions, StyleSheet } from 'react-native';
;

export const darkMode = StyleSheet.create({
  LAYOUT_BLOCK: {
    backgroundColor: 'black',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
})