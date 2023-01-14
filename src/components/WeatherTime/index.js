import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "./styles";
export default (props) => {
  let time = new Date(props.time);
  time = time.getHours() + ":00";
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{time}</Text>
            <Image
          style={styles.WeatherIcon}
          source={{
            uri: `https://openweathermap.org/img/wn/${props.icon}@2x.png`,
          }}
        />
        <Text style={styles.text}>{Math.floor(props.temperature) + ' °' + props.unit}</Text>
        </View>
    )
}