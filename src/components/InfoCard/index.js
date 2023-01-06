import React, {Children} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default props => {
  return (
    <View style={styles.container}>
      {props.title ? <Text style={styles.titleText}>{props.title}</Text> : null}
      {props.children}
    </View>
  );
};
