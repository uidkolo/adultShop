import md5 from 'js-md5'
import axios from 'axios'



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