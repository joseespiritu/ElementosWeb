import axios from 'axios';

export const principal = axios.create({
    baseURL: 'https://api.nasa.gov'
});