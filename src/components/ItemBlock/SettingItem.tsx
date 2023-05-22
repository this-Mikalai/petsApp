import { View, Text, StyleSheet, Dimensions } from 'react-native';
import SwitchCustom from '../Switch/SwitchCustom';

const win = Dimensions.get('window');

const SettingItem = ({ text, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        <Text>{text}</Text>
        {children}
      </View>
    </View>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  block: {
    width: (win.width / 100) * 86,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
