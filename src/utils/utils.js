import md5 from 'js-md5'
import axios from 'axios'

// 支付签名
export const sign = (data) => {
    const key = '8835EF9EF10B8C5CE9AD270B3929A5B9'
    let paramsStr = ''
    for (let key of Object.keys(data)) {
        if (data[key] != '' && key != 'sign') {
            paramsStr += `${key}=${data[key]}&`
        }
    }
    paramsStr += `key=${key}`
    return md5(paramsStr).toUpperCase()
}


//获取用户本地ip的方法
export const getUserIP = async() => {
    let url = process.env.NODE_ENV == 'development' ? 'ipApi/cityjson?ie=utf-8' : 'http://pv.sohu.com/cityjson?ie=utf-8'
    const res = await axios.get(url)
    const objStr = res.data.split('=')[1].split(";")[0]
    const obj = JSON.parse(objStr)
    return {
        ip: obj.cip,
        city: obj.cname
    }
}

// 支付
export const pay = async(type, money) => {
    const { ip } = await getUserIP()
    let params = {
        api_id: '1581246',
        money,
        notify_url: 'http://pay.bbtswap.com',
        orderid: +new Date(),
        return_url: 'http://pay.bbtswap.com',
    }
    params.sign = sign(params)
    params.gtype = 'ks_mck'
    params.ip = ip
    params.mid = type == 'wxpay' ? 'f0a1f1' : '9c42f3'
    params.type = type

    const res = await axios.post('http://pay.bbtswap.com/api/pay', params)
    return res.data
}

// 检测是否为微信浏览器
export const checkIsNeizhi = () => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true
    } else if (ua.match(/QQ/i) == "qq") {
        return true
    } else if (ua.match(/Alipay/i) == "alipay") {
        return true
    }
    return false;
}

// 根据用户ip生成店名
export const generateShopName = async() => {
    let { city } = await getUserIP()
    city = city.substr(city.indexOf('省') + 1)
    city = city.substr(city.indexOf('区') + 1)
    if (city.split('市').length > 2) {
        city = city.substr(city.indexOf('市') + 1)
    }
    city = city.replace('市', '')
    return `${city}3号店`
}