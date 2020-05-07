import API from '../../api';
import * as types from './types';

const setValueInReducer = (field, value) => ({
  type: types.SET_VALUE_IN_REDUCER,
  field,
  value,
});

export const getAllCoctailes = (filter = ['Ordinary Drink']) => dispatch => {
  dispatch(setValueInReducer('loading', true));
  API.get(`/filter.php?c=${filter.toString()}`)
    .then(res => {
      dispatch(setValueInReducer('coctailes', res.data.drinks));
    })
    .then(() => dispatch(setValueInReducer('loading', false)));
};

export const getFilters = () => dispatch => {
  dispatch(setValueInReducer('loading', true));
  API.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then(res => dispatch(setValueInReducer('filters', res.data.drinks)))
    .then(() => dispatch(setValueInReducer('loading', false)));
};
