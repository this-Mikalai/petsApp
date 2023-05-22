import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window');

type ItemList = {
  item: unknown;
};

const ItemPet = ({ item }: ItemList) => {
  return (
    <View style={styles.block}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.genius.com/81cd75edfda92704a12ae9ebb6c27da8.1000x1000x1.jpg',
          }}
        />
      </View>
      <Text style={styles.title}>Title</Text>
      <Text style={styles.text}>small description</Text>
    </View>
  );
};

export default ItemPet;

const styles = StyleSheet.create({
  block: {
    width: (win.width / 100) * 40,
    backgroundColor: 'red',
    marginBottom: 20,
  },
  image: {
    resizeMode: 'stretch',
    height: (win.height / 100) * 20,
    width: (win.width / 100) * 40,
  },
  title: {
    textAlign: 'left',
    fontWeight: '500',
  },
  text: {},
});
