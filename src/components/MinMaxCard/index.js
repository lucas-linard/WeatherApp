import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
export default props => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.maxText}>{props.dayOfWeek}</Text>
        <Text style={styles.minText}>{props.day}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.maxText}>{props.max}</Text>
        <Text style={styles.minText}>{props.min}</Text>
      </View>
    </View>
  );
};
