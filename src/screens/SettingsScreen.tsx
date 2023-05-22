import { SectionList } from 'react-native';
import { View, Text } from 'react-native';
import SettingItem from '../components/ItemBlock/SettingItem';
import SwitchTheme from '../components/Switch/SwitchTheme';

const Settings = () => {
  return (
    <View>
      <SettingItem text={'qwe'}>
        <SwitchTheme />
      </SettingItem>
    </View>
  );
};

export default Settings;
