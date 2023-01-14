import React from 'react';
import {FlatList, View, Text} from 'react-native';
import WeatherTime from '../WeatherTime';
export default ({ data, unit }) => {
  if(data){
  return (
    <FlatList
      data={data?.list}
      keyExtractor={item => String(item.dt)}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={({item}) => (
        <View style={{padding: 10}}>
          <WeatherTime time={item.dt_txt} temperature={item.main.temp} icon={item.weather[0].icon} unit={unit}/>
        </View>
      )}
    />
  )}

  
  return (
  <>
  </>
  )
};
