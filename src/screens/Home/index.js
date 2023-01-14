import React, {useEffect, useState} from 'react';
import {View, Alert, Linking, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Config from 'react-native-config';
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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default () => {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState(null);
  let [weather, setWeather] = useState({});
  const api = 'https://api.openweathermap.org/data/2.5';
  const apikey = '7a8db69bc2dcfb19c9d563c2970f1726';



  const handleOpenSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      Linking.openSettings();
    }
};

  const createThreeButtonAlert = () => Alert.alert(
    "Permissão de localização não concedida",
    "Para utilizar o aplicativo é necessário permitir o acesso a localização e reiniciar o aplicativo",
    [
      
      { text: "Configurações", onPress: () => handleOpenSettings() }
    ]
  );


  useEffect(() => {
    // need to fix to handle geo location not granted
    setIsLoading(true);
    //const teste = Geolocation.requestAuthorization();
    Geolocation.getCurrentPosition(
      pos => {        
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${apikey}&units=metric&lang=pt_br`,
          )
          .then(response => {            
            setWeather(response.data);
            setIsLoading(false);
          })
          .catch(error => {
            setError(error);
            setIsLoading(false);
            
          });
      },
      error => {
        // console.log(error)
        // const requestAuth = () =>
        createThreeButtonAlert()
        // Geolocation.requestAuthorization()
        // requestAuth();
      },
    );
  }, []);  

  console.log(Config.API_KEY)
  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <WeatherHeader
        temperature={Math.floor(weather?.main?.temp) || ''}
        weather={capitalizeFirstLetter(
          weather?.weather?.[0]?.description || '',
        )}
        city={weather?.name || ''}
      />
      <MinMaxCard
        min={Math.floor(weather?.main?.temp_min) + 'º' || ''}
        max={Math.floor(weather?.main?.temp_max) + 'º' || ''}
        dayOfWeek={'Terça'}
        day={'Hoje'}
      />
      <InfoCard title={'Próximas 24 Horas'}>
        <HorizontalList data={data} />
      </InfoCard>
      <InfoCard>
        <InfoHud data={weather} />
      </InfoCard>
    </View>
  );
};
