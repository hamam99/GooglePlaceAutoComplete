import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

type IMarker = {
  latitude: number;
  longitude: number;
  title: string;
  description: string;
};

const MapViewRN = ({ marker }: { marker: IMarker }) => {
  const ref = React.createRef<MapView>();

  return (
    <MapView
      ref={ref}
      provider={PROVIDER_GOOGLE}
      style={{ flex: 1 }}
      onLayout={() => {
        ref?.current?.animateToRegion({
          latitude: marker.latitude,
          longitude: marker.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
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
