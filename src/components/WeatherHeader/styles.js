import { StyleSheet } from "react-native";

export default StyleSheet.create({
    Weathercontainer: {
      backgroundColor: '#000000',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    StatusContainer: {
      backgroundColor: '#000000',
      flexDirection: 'column',
      alignItems: 'center',
    },
    WeatherImg: {
      width: 200,
      height: 200,
    },
    temperatureText: {
      color: '#fff',
      fontSize: 96,
    },
    subtitleText: {
      color: '#fff',
      fontSize: 24,
  
    },
    cityText: {
      color: '#fff',
      fontSize: 32,
      fontWeight: 'bold',
    },
  });