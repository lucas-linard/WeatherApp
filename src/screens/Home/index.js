import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import WeatherHeader from '../../components/WeatherHeader';
import InfoCard from '../../components/InfoCard';
import InfoHud from '../../components/InfoHud';
import HorizontalList from '../../components/HorizontalList';
import axios from 'axios';
import MinMaxCard from '../../components/MinMaxCard';

const data = [
  {id: 1, time: '9:00', temperature: '25º'},
  {id: 2, time: '10:00', temperature: '26º'},
  {id: 3, time: '11:00', temperature: '27º'},
  {id: 4, time: '11:00', temperature: '30º'},
  {id: 5, time: '12:00', temperature: '24º'},
  {id: 6, time: '13:00', temperature: '22º'},
  {id: 7, time: '14:00', temperature: '25º'},
  {id: 8, time: '15:00', temperature: '29º'},
];

const hud = [
  {id: 1, title: 'Sensação real', value: '22º', icon: 'thermometer-alert'},
  {id: 2, title: 'Vel. Vento', value: '10km/h', icon: 'weather-windy'},
  {id: 3, title: 'Umidade', value: '80%', icon: 'water-percent'},
  {
    id: 4,
    title: 'Probalidade de chuva',
    value: '1000hPa',
    icon: 'weather-rainy',
  },
  {id: 5, title: 'Nascer do sol', value: '06:00', icon: 'weather-sunset-up'},
  {id: 6, title: 'Pôr do sol', value: '18:00', icon: 'weather-sunset-down'},
];

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default () => {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();
    
    return (
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <WeatherHeader
          temperature={'25'}
          weather={capitalizeFirstLetter('nublado')}
          city={'Feira de Santana'}
        />
        <MinMaxCard min="20º" max="30º" dayOfWeek={'Terça'} day={'Hoje'} />
        <InfoCard title={'Próximas 24 Horas'}>
          <HorizontalList data={data} />
        </InfoCard>
        <InfoCard>
          <InfoHud data={hud} />
        </InfoCard>
      </View>
    );
};
