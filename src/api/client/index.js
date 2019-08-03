import apiFetch from './apiFetch';

const callNative = () => (process.env.NODE_ENV === 'development' ? apiFetch : window.native);

const curry = method => args => callNative()(method, args);

const API = {
  get: curry('GET'),
  post: curry('POST'),
  put: curry('PUT'),
  patch: curry('PATCH'),
  delete: curry('DELETE'),
};

export default API;
