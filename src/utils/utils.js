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
    console.log(paramsStr)
    return md5(paramsStr).toUpperCase()
}


//获取用户本地ip的方法
export const getUserIP =  async () => {
    const res = await axios.get('/api/cityjson?ie=utf-8')
    const objStr = res.data.split('=')[1].split(";")[0]
    const obj = JSON.parse(objStr)
    return {
        ip: obj.cip,
        city: obj.cname
    }
}

// 支付
export const pay = async(type, money)=>{
    const url = 'https://www.xmhongqu.com/api/pay'
    const { ip } = await getUserIP()

    let params = {
        api_id : '4292760',
        money,
        notify_url: 'https://www.baidu.com',
        orderid: +new Date(),
        return_url: 'https://www.baidu.com',
    }
    params.sign = sign(params)
    params.gtype = 'ks_mck'
    params.ip = ip
    params.mid = '056733'    
    params.type = type

    const res = await axios.post(url, params)
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