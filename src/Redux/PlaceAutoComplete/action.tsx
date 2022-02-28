import { ToastAndroid } from 'react-native';
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { getPlaceAutoComplete, getPlaceDetail } from '../../Services';
import { DETAIL_PLACE, LIST_AUTO_COMPLETE_PLACE } from './constant';

export const getListAutoComplete =
  (keyword: string): ThunkAction<void, {}, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: any) => {
    try {
      console.log('getListAutoComplete');
      const { success, response = [] } = await getPlaceAutoComplete(keyword);
      if (!success) {
        return;
      }
      dispatch(setListAutoComplete(response?.predictions ?? []));
      console.log('getListAutoComplete', 'result', response);
      console.log(
        'getListAutoComplete',
        'result prediction',
        response?.prediction,
      );
    } catch (error: any) {
      console.log('error', error);
      ToastAndroid.show('Sorry. try again later', ToastAndroid.SHORT);
    }
  };

const setListAutoComplete = (list: any) => ({
  type: LIST_AUTO_COMPLETE_PLACE,
  payload: list,
});

export const getDetailPlace =
  (placeId: string): ThunkAction<void, {}, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: any) => {
    try {
      const { success, response = {} } = await getPlaceDetail(placeId);
      if (!success) {
        return;
      }
      dispatch(setDetailPlace(response));
      console.log('getDetailPlace', 'result', response);
    } catch (error: any) {
      console.log('error', error);
      ToastAndroid.show('Sorry. try again later', ToastAndroid.SHORT);
    }
  };

const setDetailPlace = (place: any) => ({
  type: DETAIL_PLACE,
  payload: place,
});
