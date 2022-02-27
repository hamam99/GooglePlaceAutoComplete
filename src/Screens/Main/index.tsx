import React, { useState } from 'react';
import { View } from 'react-native';
import { MapViewRN, PlaceAutoComplete } from '../../Components';

const Main = () => {
  const [marker, setMarker] = useState({
    title: '',
    description: '',
    latitude: 0,
    longitude: 0,
  });

  return (
    <View style={{ flex: 1 }}>
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
      <MapViewRN marker={marker} />
    </View>
  );
};

export default Main;
