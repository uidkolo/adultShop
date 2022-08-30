import md5 from 'js-md5'
import axios from 'axios'
import { getLocation } from './index'

// 支付签名
const sign = (data) => {
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

export const pay = async(type, money) => {
    const { ip } = await getLocation()
    let params = {
        api_id: '4292760',
        money,
        notify_url: 'http://x.bbtswap.com',
        orderid: +new Date(),
        return_url: 'http://x.bbtswap.com',
    }
    params.sign = sign(params)
    params.gtype = 'ks_mck'
    params.ip = ip
    params.mid = type == 'wxpay' ? 'ec4df6' : 'ac5103'
    params.type = type
    const res = await axios.post('http://pay.bbtswap.com/api/pay', params)
    const data = res.data
    if (data.code == 0) {
        return {
            reallink: data.reallink,
            payUrl: data.payUrl
        }
    }
}