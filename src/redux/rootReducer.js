import {combineReducers} from 'redux';

import coctailesReducer from './coctailes/reducer';

const rootReducer = combineReducers({coctailes: coctailesReducer});

export default rootReducer;
