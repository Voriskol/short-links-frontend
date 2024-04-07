'use client'

import axios, {CreateAxiosDefaults} from "axios";

const optional: CreateAxiosDefaults = {
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
}

const AxiosProvider = axios.create(optional);

AxiosProvider.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});

AxiosProvider.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});

const AxiosInstance = axios.create(optional);

export {AxiosProvider, AxiosInstance}