import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import Home from './src/screens/Home';

const App = () => {
  const [weather, setWeater] = useState({});
  const [loading, setLoading] = useState(true);

  // const getWeater = async (lat, lon) => {
  //   const key = '1d9b4f65945bdc6dce0dcd9169c6f5a1';
  //   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;    
  //   setWeater(await axios.get(url));
  //   setLoading(false);
  // };

  // if (loading) {
  //   //get current position and get weather
  //   Geolocation.getCurrentPosition(async info =>
  //     await getWeater(info.coords.latitude, info.coords.longitude),
  //   );
    
  // }
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
export default App;
