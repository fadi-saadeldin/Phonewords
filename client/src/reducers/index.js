import {combineReducers} from 'redux';
import phonewordsReducer from './phonewordsReducer';

export default combineReducers({
    phonewords:phonewordsReducer, 
});
