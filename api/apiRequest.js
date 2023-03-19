import axios from 'axios';
import {API_URL} from '@env';

const getWeather = async (city, callback) => {
    const url = `${API_URL}${city}`;
    const response = await axios.get(url);
    callback(response.data);
};

export default getWeather;