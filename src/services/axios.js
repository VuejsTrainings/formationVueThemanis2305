import axios from 'axios';

const axiosService = axios.create({
    baseURL:'https://my-json-server.typicode.com/VuejsTrainings/dbFraisSante',
    headers:{
        'Content-Type': 'application/json',
        accept: 'applicatio,/json'
    },
});

export default axiosService;