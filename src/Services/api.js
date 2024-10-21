import axios from 'axios'

const GITHUB_INSTANCE = axios.create({
    baseURL: 'https://api.github.com',
});

const token = import.meta.env.VITE_GITHUB_TOKEN;

GITHUB_INSTANCE.interceptors.request.use(function (config) {
    // Make sure the token is not undefined or empty
    if (token) {
        config.headers.Authorization = `token ${token}`;
    } else {
        console.error('GitHub token is missing. Please check your .env file.');
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default GITHUB_INSTANCE;