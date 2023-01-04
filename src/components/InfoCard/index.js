import React, { Children } from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.title}</Text>
      {props.children}
    </View>
  );
};
