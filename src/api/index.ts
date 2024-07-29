import axios from 'axios';
import {API_KEY, BASE_URI} from '../constants/api';

const api = axios.create({
  baseURL: BASE_URI,
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export {api};
