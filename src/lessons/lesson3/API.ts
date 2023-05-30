import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com/',
};
const key = '1d3b82db';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: async (title: string) => {
        return axiosInstance.get(`?t=${title}&apikey=${key}`)
            .then(response => response.data)
    },
    searchFilmsByType: async (title: string, type: string) => {
        return axiosInstance.get(`?t=${title}&type=${type}&apikey=${key}`)
            .then(response => response.data)
    }
};


export default API;
