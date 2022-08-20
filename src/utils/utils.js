import md5 from 'js-md5'
import axios from 'axios'

// 支付签名
export const sign = (data) => {
    const key = '3083097A905458E34E3BBACAFD93AFBD'
    let paramsStr = ''
    for (let key of Object.keys(data)) {
        if (data[key] != '' && key != 'sign') {
            paramsStr += `${key}=${data[key]}&`
        }
    }
    paramsStr += `key=${key}`
    return md5(paramsStr).toUpperCase()
}


export const getUserIP = async() => {
    const res = await axios.get('api/cityjson?ie=utf-8')
    console.log(res)
}