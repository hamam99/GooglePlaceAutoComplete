import React from 'react';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';

type IGooglePlaceAutoComplete = {
  data: GooglePlaceData;
  detail: GooglePlaceDetail;
};

const PlaceAutoComplete = ({ onPress }: { onPress: any }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      onPress={(data, details = null) => {
        onPress(data, details);
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

export default PlaceAutoComplete;
