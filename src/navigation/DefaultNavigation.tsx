import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/Auth/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PetsScreen from '../screens/PetsScreen';
import Settings from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

function DefaultNavigation() {
  return (
    <View style={style.body}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={
            {
              // tabBarActiveTintColor: '#58ceb2',
              // tabBarInactiveTintColor: 'gray',
              // tabBarStyle: {
              //   borderTopWidth: 0,borderTopLeftRadius:15,borderTopRightRadius:15,backgroundColor:'transparent'
              // },
              // tabBarLabelStyle:{paddingBottom:30},
              // tabBarIcon: ({ focused, color, size }) => {},
              // tabBarShowLabel: false,
              // headerShown:false,
              // tabBarItemStyle:{ backgroundColor: 'yellow', borderTopLeftRadius:15,borderTopRightRadius:15,}
            }
          }
        >
          <Tab.Screen
            options={
              {
                // tabBarIcon: () => {
                //   return <Ionicons name="folder" />;
                // },
              }
            }
            name="Home"
            component={HomeScreen}
          />
          <Tab.Screen name="Pets" component={PetsScreen} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default DefaultNavigation;

const style = StyleSheet.create({
  body: {
    flex: 1,
  },
});
