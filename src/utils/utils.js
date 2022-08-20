import md5 from 'js-md5'

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


//获取用户本地ip的方法
export const getUserIP = (onNewIP) => {
    let MyPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    let pc = new MyPeerConnection({
        iceServers: []
    });
    let noop = () => {};
    let localIPs = {};
    let ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;
    let iterateIP = (ip) => {
        console.log('------------', ip)
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
    };
    pc.createDataChannel('');
    pc.createOffer().then((sdp) => {
        sdp.sdp.split('\n').forEach(function(line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });
        pc.setLocalDescription(sdp, noop, noop);
    }).catch((reason) => {
        console.log(reason)
    });
    pc.onicecandidate = (ice) => {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
}