import { DETAIL_PLACE, LIST_AUTO_COMPLETE_PLACE } from './constant';
import { Prediction } from './interfaces';

interface baseActionProps {
  type: string;
  payload: any;
}

interface InitialState {
  listAutoComplete: Prediction[];
}

const INITIAL_STATE = {
  listAutoComplete: [],
  detailPlace: {},
};

const PlaceAutoCompleteReducer = (
  state = INITIAL_STATE,
  action: baseActionProps,
) => {
  switch (action.type) {
    case LIST_AUTO_COMPLETE_PLACE: {
      return {
        ...state,
        listAutoComplete: action.payload,
      };
    }
    case DETAIL_PLACE: {
      return {
        ...state,
        detailPlace: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default PlaceAutoCompleteReducer;
