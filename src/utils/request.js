import axios from 'axios'
import { Toast } from 'vant'
const service = axios.create({
    baseURL: process.env.NODE_ENV == "development" ? "/api" : "/",
    timeout: 10000
})

service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== 200) {
            if (res.code === 501) {
                Toast('登录失效');
            } else {
                Toast(res.message || 'Error');
            }
        }
        return {
            data: res.data,
            result: res.result
        }
    },
    error => {
        console.log('err' + error)
        Toast(error.message);
        return Promise.reject(error)
    }
)

export default service