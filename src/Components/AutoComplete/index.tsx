import React, { useState } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearListAutoComplete,
  getDetailPlace,
  getListAutoComplete,
} from '../../Redux/PlaceAutoComplete/action';

const AutoComplete = () => {
  const [textValue, setTextValue] = useState('');
  const dispatch = useDispatch();
  const { listAutoComplete } = useSelector(
    state => state.PlaceAutoCompleteReducer,
  );

  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <TouchableOpacity
        style={{
          marginHorizontal: 5,
          marginVertical: 5,
          height: 50,
          justifyContent: 'center',
        }}
        onPress={() => {
          onPressListAutoComplete(item);
        }}>
        <Text>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  const onPressListAutoComplete = (item: any) => {
    dispatch(getDetailPlace(item.place_id));
    setTextValue(item.description);
    dispatch(clearListAutoComplete());
  };

  const Divider = () => {
    return (
      <View style={{ height: 1, width: '100%', backgroundColor: '#9a9a9a' }} />
    );
  };

  const onChangeText = (text: string) => {
    setTextValue(text);
    dispatch(getListAutoComplete(text));
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
        placeholder="Search"
        onChangeText={onChangeText}
        value={textValue}
      />

      <FlatList
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          marginTop: 3,
          maxHeight: 300,
        }}
        data={listAutoComplete}
        renderItem={renderItem}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
};

export default AutoComplete;
