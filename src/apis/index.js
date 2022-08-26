import request from '../utils/request'

/**
 * 获取用户地址信息
 */
export const getLocation = async() => {
    const { data } = await request({
        url: `api/location`,
        method: 'get'
    })
    return data
}

/**
 * 发起支付
 * params money 金额
 * params type 支付方式 wxpay / alipay
 */
export const pay = async(type, money) => {
    const { data } = await request({
        url: `api/pay`,
        method: 'post',
        data: {
            money,
            type
        }
    })
    return data
}