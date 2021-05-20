import {createStore} from 'redux';
import countAppReducer from './countapp_reducer';

export default createStore(countAppReducer)