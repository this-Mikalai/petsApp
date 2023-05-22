import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AdminScreen from '../screens/AdminScreen/AdminScreen';

const Tab = createBottomTabNavigator();

const AdminNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Screen name="AdminScreen" component={AdminScreen} />
    </NavigationContainer>
  );
};

export default AdminNavigation;
