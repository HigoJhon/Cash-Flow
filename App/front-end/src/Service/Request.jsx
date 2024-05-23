import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7037', // Use HTTPS
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getAllRequests = async (endpoint) => {
    const response = await api.get(endpoint);
    return response.data;
};

export const postRequest = async (endpoint, data) => {
    const response = await api.post(endpoint, data);
    return response;
};
