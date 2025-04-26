import axios from "axios";

const client = axios.create({
    baseURL: 'http://127.0.0.1:8099',
    headers:{
        "Content-Type": "application/json",
    }
});

client.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'application/json';
        config.headers['Authorization'] = 'hash';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

client.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if(error.response?.status === 401){
            error.config.headers = {
                'Content-Type' : 'application/json',
                'Authorization' : 'hash',
            };
            const response = await axios.request(error.config);
            return response;
        }
        return Promise.reject(error);
    }
);

export default client;