import {combineReducers} from 'redux';

import coctailesReducer from './coctailes';

const rootReducer = combineReducers({
  coctailes: coctailesReducer,
});

export default rootReducer;
