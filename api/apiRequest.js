import axios from 'axios';
import {AsyncStorage} from 'react-native';
import { config } from '../config';
import { demoData } from './demoData';

// var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5ODgxNmY4YS0zYzMwLTRmZDgtOTMyZi1hZWUzYzE4ODFlY2EiLCJqdGkiOiIyMDllMjM0ZTFjYTE1ZWJiMWFmOGYxZTY3NGQzY2RlYTExZDA2YTUwYTQyNTA5NGZlNjI1YWEwNTNjY2RiMDY2ZDViYTI2Y2IyMjVlMDYyOCIsImlhdCI6MTY3NjgxNjk5MSwibmJmIjoxNjc2ODE2OTkxLCJleHAiOjE3MDgzNTI5OTEsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.ex2r0F1WnBz7SJNymjD5_xDAj8MHy2ATBOnkYgo4bXAeGEj8wGcNV5E-AZmuvMihyWBaEIM0njInEYzy0fD_xXuaa-I9CLzan55PIvSfEbe9W0fS2CYYTyEEK3jDJQqYuoIHtKWZajF7GP_W3eGniQ9KoyxSl9muffv2zEMyqklMwqOFQrM259RhkjUekf31d2CsUN3afAC_lSLXqwQkyZYm1WNkUzFOi6J95OAa2uqvviv9g0dp6LR_oetOGDXswBkGkkv044Q_n7CB-v0ry196KNIaq7unaaF5RKcr99Q8IvFsG1bs6784sg4CHxcObkbm7LRac8JWCuoKRZjfkY0VMbTQSO3LLNivPNE02yiySruNRs5riHnAq4zjZyYm0KMZRiWLACDZbuJh3W4ng9JVNuVduK7_75ykEH0r1FZVz7aDfv-wliM05ydXZKuJKKBJZETTJ9M6TOd7xWD73a4IN2R8FmE3JURVogmW_3SpcipmRrm8XGtU9UJm2c4AIFcnasnJXt-WcMlPDRGq7O8W6LQh-HhzybshHgUIlGXmSmzoIEPrJZbXnTBG8434kZSTheTp8a_lBvkHz5wmCRaTo1g3XW1NOdCAUCeCFr7HHyR8YwVjbYtackC-7sFexKdzx97HuV0_DpS0P5UHkW4CWRXwdv6PNrLDMnI1wSM';

// const config = {
//     headers: { Authorization: `Bearer ${token}` }
// };

const getBlogs = async () => {
  if (config.apiEnable == 1) {
    console.log(config.apiUrl+"get/blogs")
    const response = await axios.get(config.apiUrl+"get/blogs");
    console.log(response)
    if (response.status !== 200) {
      throw new Error('Data coud not be fetched!')
    } else {
        _storeData = async () => {
            try {
              await AsyncStorage.setItem(
                '@Blogs',
                response.data,
              );
            } catch (error) {
              // Error saving data
            }
        };
        return response.data
    }
  } else {
    console.log("demoData", demoData)
    return demoData;
  }
};

const getBlog = async (id) => {
  if (config.apiEnable == 1) {
    const response = await axios.get(config.apiUrl+"get/blog/"+id);
    if (response.status !== 200) {
      throw new Error('Data coud not be fetched!')
    } else {
      return response.data
    }
  } else {
    let blogDetail = demoData.filter(value => value.id == id);
    return blogDetail[0];
  }
}

export {getBlogs, getBlog};