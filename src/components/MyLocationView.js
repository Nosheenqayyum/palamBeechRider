import React, {useState, useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native-animatable';
import MapView, {Marker} from 'react-native-maps';
import {height, width} from '../constants';
import {locationPermission, getCurrentLocation} from '../helper';

const App = () => {
  const [position, setPosition] = useState({
    latitude: 25.151722,
    longitude: 55.323394,
    latitudeDelta: 0.12,
    longitudeDelta: 0.12,
  });

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    // let val = locationPermission();
  };

  return (
    <View style={{flex: 1}}>
      <MapView style={styles.map} initialRegion={position}>
        <Marker
          title="Yor are here"
          //  description='This is a description'
          coordinate={position}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    height: height,
    width: width,
  },
});

export default App;
