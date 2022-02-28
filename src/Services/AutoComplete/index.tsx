import { ToastAndroid } from 'react-native';
import { KEYS } from '../../Constants';
import AxiosWrapper from '../AxiosWrapper';
import ListUrl from '../ListUrl';
import Qs from 'qs';

const KEY = {
  key: KEYS.GOOGLE_API,
  language: 'en',
};

const getPlaceAutoComplete = async (keyword: string) => {
  console.log('getPlaceAutoComplete');
  try {
    const url =
      ListUrl.PLACE_AUTO_COMPLETE +
      encodeURI(keyword) +
      '&' +
      Qs.stringify(KEY);
    const response = await AxiosWrapper.get(url);
    console.log('response', response.data);
  } catch (_) {
    ToastAndroid.show('Sorry. try again later', ToastAndroid.SHORT);
  }
};

const getPlaceDetail = async (placeId: string) => {
  console.log('getPlaceDetail');

  try {
    const url =
      ListUrl.PLACE_DETAIL +
      Qs.stringify({ placeId: placeId }) +
      Qs.stringify(KEY);
    const response = await AxiosWrapper.get(url);
    console.log('response', response.data);
  } catch (_) {
    ToastAndroid.show('Sorry. try again later', ToastAndroid.SHORT);
  }
};

export { getPlaceAutoComplete, getPlaceDetail };
