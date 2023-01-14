import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from './styles';
export default (props) => {
  return (
    <View>
      <View style={styles.Weathercontainer}>
        <Image
          style={styles.WeatherImg}
          source={{
            uri: 'https://openweathermap.org/img/wn/10d@4x.png',
          }}
        />
        <Text style={styles.temperatureText}>{Math.floor(props.temperature) + '°' + props.unit}</Text>
      </View>
      <View style={styles.StatusContainer}>
        <Text style={styles.subtitleText}>{props.weather}</Text>
        <Text style={styles.cityText}>{props.city}</Text>
      </View>
    </View>
  );
};
