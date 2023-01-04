import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default props => {
  return (
    <View>
      {props.data.map(item => {
        return (
          <View style={styles.container} key={item.id}>
            <MaterialCommunityIcons
              name={item.icon}
              size={20}
              color="#fff"
            />
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text}>{item.value}</Text>
          </View>
        );
      })}
    </View>
  );
};
