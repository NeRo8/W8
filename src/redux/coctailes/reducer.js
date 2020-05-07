import {coctailesTypes} from './index';

const initState = {
  loading: true,
  coctailes: [],
};

const coctailesReducer = (state = initState, action) => {
  switch (action.type) {
    case coctailesTypes.SET_VALUE_IN_REDUCER: {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
  }
};

export default coctailesReducer;
