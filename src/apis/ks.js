import request from '../utils/request'

/**
 * 下单
 * params amount 金额
 */
export const takeOrder = async(amount) => {
    const { data } = await request({
        url: `api/ks/takeOrder`,
        method: 'post',
        data: {
            amount
        }
    })
    return data
}

/**
 * 获取支付链接
 * params merchant_id
 * params out_order_no
 */
export const getPayUrl = async({ merchant_id, out_order_no }) => {
    const { data } = await request({
        url: `api/ks/payUrl`,
        method: 'post',
        data: {
            merchant_id,
            out_order_no
        }
    })
    return data
}