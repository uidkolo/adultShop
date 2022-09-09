// 检测浏览器环境
export const getBrowserEnv = () => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return 'wx'
    } else if (ua.match(/QQ/i) == "qq") {
        return 'qq'
    } else if (ua.match(/Alipay/i) == "alipay") {
        return 'ali'
    } else {
        return 'browser'
    }
}