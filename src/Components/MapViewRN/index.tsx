import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSelector } from 'react-redux';

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

  const ref = React.createRef<MapView>();
  const { detailPlace } = useSelector(state => state.PlaceAutoCompleteReducer);

  return (
    <MapView
      ref={ref}
      provider={PROVIDER_GOOGLE}
      style={{ flex: 1 }}
      onLayout={() => {
        ref?.current?.animateToRegion({
          latitude:
            detailPlace?.geometry?.location?.lat ??
            TUGU_JOGJA_COORDINATE.latitude,
          longitude:
            detailPlace?.geometry?.location?.lng ??
            TUGU_JOGJA_COORDINATE.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      }}>
      <Marker
        coordinate={{
          latitude:
            detailPlace?.geometry?.location?.lat ??
            TUGU_JOGJA_COORDINATE.latitude,
          longitude:
            detailPlace?.geometry?.location?.lng ??
            TUGU_JOGJA_COORDINATE.longitude,
        }}
        title={marker.name ?? ''}
        description={marker.formatted_address ?? ''}
      />
    </MapView>
  );
};

export default MapViewRN;
