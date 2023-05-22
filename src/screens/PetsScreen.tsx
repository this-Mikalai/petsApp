import React from 'react';
import { View, Text, Image } from 'react-native';
import ListContainer from '../components/List/ListContainer';

const PetsScreen = () => {
  return (
    <View>
      <ListContainer list={[1, 2, 3, 4, 5, 6, 7, 8]} isScrollView={true} />
    </View>
  );
};

export default PetsScreen;
