import React from 'react';
import { Text, ViewStyle, StyleProp, View, ScrollView } from 'react-native';
import { useStyles } from '../../hooks/useStyles';
import Layout from '../Layout/Layout';
import ItemPet from '../Pets/ItemPet';

type ListContainerT = {
  list: Array<any>;
  styles?: StyleProp<ViewStyle>;
  isScrollView: boolean;
};

const ListContainer = ({ list, styles, isScrollView }: ListContainerT) => {
  // const { LIST } = useStyles();

  return (
    <ScrollView>
      <View>
        {list.map((el, ind: number) => {
          return <ItemPet key={ind} item={el} />;
        })}
      </View>
    </ScrollView>
  );
};

export default ListContainer;
