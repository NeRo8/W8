import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

const Coctaile = ({item}) => (
  <View style={styles.container}>
    <Image source={{uri: item.strDrinkThumb}} style={styles.thumbStyle} />
    <Text style={styles.titleStyle}>{item.strDrink}</Text>
  </View>
);

export default Coctaile;
