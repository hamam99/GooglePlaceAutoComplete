import React, { useState } from 'react';
import { View } from 'react-native';
import { MapViewRN, PlaceAutoComplete } from '../../Components';

const Main = () => {
  const TUGU_JOGJA_COORDINATE = {
    latitude: -7.782794234312435,
    longitude: 110.36702205341435,
  };

  const [marker, setMarker] = useState({
    title: '',
    description: '',
    latitude: TUGU_JOGJA_COORDINATE.latitude, // default coordinate
    longitude: TUGU_JOGJA_COORDINATE.longitude, // default coordinate
  });

  return (
    <View style={{ flex: 1 }}>
      <MapViewRN marker={marker} />
      <View
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
        }}>
        <PlaceAutoComplete
          onPress={(data, details) => {
            setMarker({
              title: details?.name ?? '',
              description: details?.formatted_address ?? '',
              latitude: details?.geometry.location.lat ?? 0,
              longitude: details?.geometry.location.lng ?? 0,
            });
          }}
        />
      </View>
    </View>
  );
};

export default Main;
