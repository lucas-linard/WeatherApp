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
  let [data, setData] = useState({});




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
        let endpoints = [
          `${Config.API}/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${Config.API_KEY}&units=metric&lang=pt_br`,
          `${Config.API}/forecast?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${Config.API_KEY}&units=metric&cnt=8&lang=pt_br`
        ]

        Promise.all(endpoints.map(url => axios.get(url)))
          .then(response => {                        
            setData({weather: response[0].data,forecast: response[1].data});
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

  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <WeatherHeader
        temperature={Math.floor(data.weather?.main?.temp) || ''}
        weather={capitalizeFirstLetter(
          data.weather?.weather?.[0]?.description || '',
        )}
        city={data?.weather?.name || ''}
      />
      <MinMaxCard
        min={Math.floor(data?.weather?.main?.temp_min) + 'º' || ''}
        max={Math.floor(data?.weather?.main?.temp_max) + 'º' || ''}
        dayOfWeek={'Terça'}
        day={'Hoje'}
      />
      <InfoCard title={'Próximas 24 Horas'}>
        <HorizontalList data={data?.forecast} />
      </InfoCard>
      <InfoCard>
        <InfoHud data={data?.weather} />
      </InfoCard>
    </View>
  );
};
