import axios from 'axios';
import {API_URL} from '@env';

const getWeather = async (city, setWeather, setLoading, setStatus) => {
    const url = `${API_URL}${city}`;
    const response = await axios.get(url);
    setWeather(response.data);
    setLoading(false);
    setStatus(true);
};

export default getWeather;