import axios from 'axios';

const coctaileApi = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',
});

export const setToken = token => {
  coctaileApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  //teslaApi.defaults.headers.common['Accept-Language'] = 'ru';
};

export const deleteToken = () => {
  delete coctaileApi.defaults.headers.common['Authorization'];
};

export default coctaileApi;
