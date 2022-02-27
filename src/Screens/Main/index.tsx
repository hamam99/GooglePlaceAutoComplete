import React, { useState } from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Animated, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const Main = () => {
  // -7.782794234312435, 110.36702205341435
  const TUGU_JOGJA_COORDINATE = {
    latitude: -7.782794234312435,
    longitude: 110.36702205341435,
  };
  const [location, setLocation] = useState({
    latitude: -7.782794234312435,
    longitude: 110.36702205341435,
  });
  const [marker, setMarker] = useState({
    title: '',
    description: '',
    latitude: TUGU_JOGJA_COORDINATE.latitude,
    longitude: TUGU_JOGJA_COORDINATE.longitude,
  });

  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        styles={{ backgroundColor: '#red' }}
        placeholder="Search for a place"
        onPress={(data, details = null) => {
          setMarker({
            title: details?.name ?? '',
            description: details?.formatted_address ?? '',
            latitude: details?.geometry.location.lat ?? 0,
            longitude: details?.geometry.location.lng ?? 0,
          });
        }}
        onFail={error => console.error(error)}
        query={{
          key: 'AIzaSyANgy-MLJM0s8I72oZYSfc1qp9kdvCeiUs',
          language: 'en',
        }}
        fetchDetails={true}
      />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        initialRegion={{
          latitude: TUGU_JOGJA_COORDINATE.latitude,
          longitude: TUGU_JOGJA_COORDINATE.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.title}
          description={marker.description}
        />
      </MapView>
    </View>
  );
};

export default Main;
