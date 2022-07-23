import axios from 'axios';
import {API} from '../utils/config';

const api = axios.create({baseURL: API.URL});

export default api;
