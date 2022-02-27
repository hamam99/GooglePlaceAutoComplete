import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

type IMarker = {
  latitude: number;
  longitude: number;
  title: string;
  description: string;
};

const MapViewRN = ({ marker }: { marker: IMarker }) => {
  const TUGU_JOGJA_COORDINATE = {
    latitude: -7.782794234312435,
    longitude: 110.36702205341435,
  };

  return (
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
  );
};

export default MapViewRN;
