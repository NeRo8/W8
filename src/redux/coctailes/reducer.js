import * as coctailesTypes from './types';

const initState = {
  loading: true,
  coctailes: [],
  activeFilters: ['Ordinary Drink'],
  filters: [],
};

const coctailesReducer = (state = initState, action) => {
  switch (action.type) {
    case coctailesTypes.SET_VALUE_IN_REDUCER: {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    default:
      return state;
  }
};

export default coctailesReducer;
