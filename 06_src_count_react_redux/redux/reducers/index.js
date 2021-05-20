import { combineReducers } from 'redux';
import countAppReducer from './countapp';
import personReducer from './person';

export default combineReducers({
    count: countAppReducer, 
    persons: personReducer
})

