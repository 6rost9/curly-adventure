import { AUTH_TOKEN } from '@common/constants';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://165.227.140.158:1337',
    timeout: 1000,
});

export const authorise = (login, password) => api
    .post('/auth/local/',{
        identifier: login,
        password: password,
    })
    .then(resp => {
        const { jwt, user } = resp.data;
        localStorage.setItem(AUTH_TOKEN, jwt);
        setToken(jwt);
        return user;
    })
    .catch(error => {
        const { data } = error.response;
        return Promise.reject(data);
    })

export const getUserData = () => api
    .get('/users/me')
    .then(res => {
        const { data } = res;
        return data;
    })
    .catch(error => {
        console.log('catch', error.response);
    })

export const getProductById = id => api
    .get(`/products/${id}`)
    .then(res => {
        const { data } = res;
        return data;
    })

export const getProducts = () => api
    .get(`/products/?_sort=created_at`)
    .then(res => {
        const { data } = res;
        return data;
    })

export const setToken = token => {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
