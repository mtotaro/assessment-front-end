import fetch from 'isomorphic-fetch';
import ApiError from './apiError';

const API_HOST = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

const createURL = () => `${API_HOST}`;

const apiFetch = (method, endpoint, obj) => fetch(createURL(), {
  headers: obj && {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  method,
  body: obj && JSON.stringify(obj),
}).then((res) => {
  if (res.status >= 400) {
    return res.json().then((err) => {
      if (Object.prototype.hasOwnProperty.call(err, 'Parameter')) {
        throw new ApiError(err.ClassName, err.Parameter.type, err.Parameter);
      }
      throw new ApiError(err.ClassName, err.Message);
    });
  }
  return res && res.json();
});
export default apiFetch;
