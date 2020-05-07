import API from '../../api';
import * as types from './types';

const setValueInReducer = (field, value) => ({
  type: types.SET_VALUE_IN_REDUCER,
  field,
  value,
});

export const getAllCoctailes = (filter = 'Ordinary Drink') => disaptch => {
  API.get(`/filter.php?c=${filter}`).then(res => console.log(res));
};
