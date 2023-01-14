import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function msToKmh(ms) {
  return (ms * 3.6).toFixed(2);
}
  


export default ({data}) => {  
  
  let daytime = { 
    sunrise: new Date (data?.sys?.sunrise * 1000 ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    sunset: new Date (data?.sys?.sunset * 1000 ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }
  
  let info = [
    {id: 1, title: 'Sensação real', value: Math.floor(data?.main?.feels_like) + ' º', icon: 'thermometer-alert'},
    {id: 2, title: 'Vel. Vento', value: msToKmh(data?.wind?.speed) + ' Km/h', icon: 'weather-windy'},
    {id: 3, title: 'Nuvens', value: data?.clouds?.all + ' %', icon: 'weather-cloudy'},
    {id: 4, title: 'Umidade', value: data?.main?.humidity + ' %', icon: 'water-percent'},   
    {id: 5, title: 'Nascer do sol', value: daytime?.sunrise, icon: 'weather-sunset-up'},
    {id: 6, title: 'Pôr do sol', value: daytime?.sunset, icon: 'weather-sunset-down'},     
  ]


  return (
    <View style={styles.container}>
      {info.map(item => {
        return (
          <View style={styles.grid} key={item.id}>
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
