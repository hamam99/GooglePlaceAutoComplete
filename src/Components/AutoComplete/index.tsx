import React from 'react';
import {
  FlatList,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const AutoComplete = () => {
  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <TouchableOpacity
        style={{ marginHorizontal: 5, height: 40, justifyContent: 'center' }}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  const Divider = () => {
    return (
      <View style={{ height: 1, width: '100%', backgroundColor: '#9a9a9a' }} />
    );
  };
  return (
    <View style={{ margin: 5 }}>
      <TextInput
        style={{
          borderWidth: 0.5,
          borderColor: '#9a9a9a',
          backgroundColor: 'white',
          borderRadius: 10,
        }}
      />

      <FlatList
        style={{ backgroundColor: 'white', borderRadius: 5, marginTop: 3 }}
        data={['Satu', 'dua', 'tiga']}
        renderItem={renderItem}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
};

export default AutoComplete;
