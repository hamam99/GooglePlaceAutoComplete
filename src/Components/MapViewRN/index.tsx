import React, { useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSelector } from 'react-redux';

const MapViewRN = () => {
  const ref = React.createRef<MapView>();
  const { detailPlace } = useSelector(state => state.PlaceAutoCompleteReducer);

  useEffect(() => {
    ref?.current?.animateToRegion({
      latitude: detailPlace?.geometry?.location?.lat,
      longitude: detailPlace?.geometry?.location?.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }, [detailPlace]);

  return (
    <MapView ref={ref} provider={PROVIDER_GOOGLE} style={{ flex: 1 }}>
      <Marker
        coordinate={{
          latitude: detailPlace?.geometry?.location?.lat ?? 0,
          longitude: detailPlace?.geometry?.location?.lng ?? 0,
        }}
        title={detailPlace.name ?? ''}
        description={detailPlace.formatted_address ?? ''}
      />
    </MapView>
  );
};

export default MapViewRN;
