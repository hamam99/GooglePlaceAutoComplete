import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Main = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search for a place"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log('onPress', 'data', data);
        console.log('onPress', 'details', details);
        console.log(
          'data',
          'location',
          details?.geometry.location.lat,
          details?.geometry.location.lng,
        );
      }}
      onFail={error => console.error(error)}
      query={{
        key: 'AIzaSyANgy-MLJM0s8I72oZYSfc1qp9kdvCeiUs',
        language: 'en',
      }}
      fetchDetails={true}
    />
  );
};

export default Main;
