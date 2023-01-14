import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import WeatherHeader from '../../components/WeatherHeader';
import InfoCard from '../../components/InfoCard';
import InfoHud from '../../components/InfoHud';
import HorizontalList from '../../components/HorizontalList';
import axios from 'axios';
import MinMaxCard from '../../components/MinMaxCard';
import createLocationButtonAlert from '../../utils/alerts';
import { API, API_KEY } from "@env"



function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default () => {
  let [isLoading, setIsLoading] = useState(true);
  let [erro, setError] = useState(null);
  let [data, setData] = useState({});
  let dia = new Date()
  dia = dia.toLocaleString('pt-BR', {weekday: 'long'})
  dia = dia.split(',')[0]
    
  useEffect(() => {
    // need to fix to handle geo location not granted
    setIsLoading(true);
    //const teste = Geolocation.requestAuthorization();    
    Geolocation.getCurrentPosition(
      
      pos => {       
        
        let endpoints = [
          `${API}/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_KEY}&units=metric&lang=pt_br`,
          `${API}/forecast?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_KEY}&units=metric&cnt=8&lang=pt_br`
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
       
        createLocationButtonAlert();        
      },
    );
  }, []);  
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 10}}>
      <WeatherHeader
        temperature={data.weather?.main?.temp || ''}
        weather={capitalizeFirstLetter(
          data.weather?.weather?.[0]?.description || '',
        )}
        city={data?.weather?.name || ''}
        unit={'C'}
      />
      <MinMaxCard
        min={Math.floor(data?.weather?.main?.temp_min) + 'º' || 0}
        max={Math.floor(data?.weather?.main?.temp_max) + 'º' || 0}
        dayOfWeek={capitalizeFirstLetter(dia)}
        day={'Hoje'}
      />
      <InfoCard title={'Próximas 24 Horas'}>
        <HorizontalList data={data?.forecast} unit='C' />
      </InfoCard>
      <InfoCard>
        <InfoHud data={data?.weather} />
      </InfoCard>
    </SafeAreaView>
  );
};
