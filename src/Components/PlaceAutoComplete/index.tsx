import React from 'react';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete';
import { KEYS } from '../../Constants';

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
        key: KEYS.GOOGLE_API,
        language: 'en',
      }}
      fetchDetails={true}
    />
  );
};

export default PlaceAutoComplete;
