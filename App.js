import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import Home from './src/screens/Home';
import  Config  from 'react-native-config';



const App = () => {
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
