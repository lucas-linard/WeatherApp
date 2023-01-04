import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from "./styles";
export default (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.time}</Text>
            <Image
          style={styles.WeatherIcon}
          source={{
            uri: 'https://openweathermap.org/img/wn/10d@2x.png',
          }}
        />
        <Text style={styles.text}>{props.temperature}</Text>
        </View>
    )
}