import React from 'react';
import {FlatList, View, Text} from 'react-native';
import WeatherTime from '../WeatherTime';
export default props => {
  return (
    <FlatList
      data={props.data}
      keyExtractor={item => String(item.id)}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={({item}) => (
        <View style={{padding: 10}}>
          <WeatherTime time={item.time} temperature={item.temperature} />
        </View>
      )}
    />
  );
};
