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
  try {
    const url =
      ListUrl.PLACE_AUTO_COMPLETE +
      encodeURI(keyword) +
      '&' +
      Qs.stringify(KEY);
    const response = await AxiosWrapper.get(url);
    return {
      success: true,
      response: response.data,
    };
    // console.log('response', response.data);
  } catch (err) {
    return {
      success: false,
      response: err,
    };
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
    return {
      success: true,
      response: response.data,
    };
  } catch (err: any) {
    return {
      success: true,
      response: err,
    };
  }
};

export { getPlaceAutoComplete, getPlaceDetail };
