import React from 'react';
import { View } from 'react-native';
import { AutoComplete, MapViewRN } from '../../Components';

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapViewRN />
      <View
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
        }}>
        <AutoComplete />
      </View>
    </View>
  );
};

export default Main;
