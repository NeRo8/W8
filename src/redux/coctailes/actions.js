import API from '../../api';
import * as types from './types';
import store from '../index';

const setValueInReducer = (field, value) => ({
  type: types.SET_VALUE_IN_REDUCER,
  field,
  value,
});

export const getAllCoctailes = () => dispatch => {
  const {activeFilters} = store.getState().coctailes;
  dispatch(setValueInReducer('loading', true));
  API.get(`/filter.php?c=${activeFilters.toString()}`)
    .then(res => {
      dispatch(setValueInReducer('coctailes', res.data.drinks));
    })
    .then(() => dispatch(setValueInReducer('loading', false)));
};

export const getFilters = () => dispatch => {
  dispatch(setValueInReducer('loading', true));
  API.get('list.php?c=list')
    .then(res => dispatch(setValueInReducer('filters', res.data.drinks)))
    .then(() => dispatch(setValueInReducer('loading', false)));
};
