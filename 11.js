/**
 * 终极稳定版 - 加入了全方位的防御逻辑
 */
var url = $request.url;
var body = $request.body;

const fixedSuffix = "I3NidzN2Vme2Y6YweWO8IDMmRWY5MTO";

// Base64 函数封装
function toBase64(str) {
    try {
        return btoa(unescape(encodeURIComponent(str)));
    } catch (e) {
        // 兜底方案：如果环境不支持 btoa
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        let out = '';
        for (let i = 0, len = str.length; i < len; i += 3) {
            let a = str.charCodeAt(i), b = str.charCodeAt(i + 1), c = str.charCodeAt(i + 2);
            out += chars.charAt(a >> 2);
            out += chars.charAt(((a & 3) << 4) | (b >> 4));
            out += chars.charAt(isNaN(b) ? 64 : ((b & 15) << 2) | (c >> 6));
            out += chars.charAt(isNaN(c) ? 64 : c & 63);
        }
        return out;
    }
}

// 执行修改逻辑
if (body && body.indexOf('{') !== -1) {
    try {
        let obj = JSON.parse(body);
        if (obj) {
            let targetScore = "9000";
            obj['gameScore'] = 9000;
            // 构造加密串
            obj['achieve'] = toBase64('"' + targetScore + '"') + fixedSuffix;
            body = JSON.stringify(obj);
        }
    } catch (e) {
        console.log("JSON解析失败，跳过修改");
    }
}

if (url.indexOf("gameScore=") !== -1) {
    url = url.replace(/gameScore=\d+/g, "gameScore=9000");
}

// 必须保证最后执行了 $done
$done({ url: url, body: body });
