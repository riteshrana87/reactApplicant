/* eslint-disable no-console */
import axios from 'axios'
const version = 'v1'
const API_URL = 'http://127.0.0.1:8000/api/'
console.log(API_URL);
axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['X-CSRF-TOKEN'] = window.token.csrfToken;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';



export default axios
