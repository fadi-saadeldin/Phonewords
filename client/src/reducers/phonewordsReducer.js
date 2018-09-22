import {
  GET_WORDS_RESULTS,
  CLEAR_WORDS,
  SPINNER_LOADING,
  PHONE_CHANGED,
  GET_ERROR
} from '../actions/types';

const initialState = {
  wordsList: [],
  loading: false,
  phone: [],
  error:false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WORDS_RESULTS:
      return {
        ...state,
        wordsList: action.payload,
        loading: false,
        error:false
      };
    case SPINNER_LOADING:
      return {
        ...state,
        loading: true
      };
    case CLEAR_WORDS:
      return {
        ...state,
        wordsList: [],
        loading: true,
        error:false,
        phone:""
      }
    case PHONE_CHANGED:
      return {
        ...state,
        phone: action.payload,
        loading: false,
        error:false
      };
      case GET_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}

