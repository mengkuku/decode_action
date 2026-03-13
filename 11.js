/**
 * 脚本功能：消消乐分数修改 (Quantumult X)
 * 逻辑：修改 URL 参数 gameScore，并重写请求体中的 achieve 字段（Base64 固定）0
 */
[rewrite_local]
^https?:\/\/.*\.hdpyqe\.com\/api\/playerJoinGame\/achieve url script-request-body https://raw.githubusercontent.com/mengkuku/decode_action/refs/heads/main/11.js
[mitm]
hostname = *.hdpyqe.com

/**
 * 脚本功能：消消乐分数修改 (Quantumult X)
 * 逻辑：修改 URL 参数 gameScore，并重写请求体中的 achieve 字段
 */

function base64Encode(str) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    let out = '';

    for (let i = 0; i < str.length; i += 3) {
        let a = str.charCodeAt(i);
        let b = str.charCodeAt(i + 1);
        let c = str.charCodeAt(i + 2);

        out += chars.charAt(a >> 2);
        out += chars.charAt(((a & 3) << 4) | ((b || 0) >> 4));

        if (isNaN(b)) {
            out += '==';
            break;
        }

        out += chars.charAt(((b & 15) << 2) | ((c || 0) >> 6));

        if (isNaN(c)) {
            out += '=';
            break;
        }

        out += chars.charAt(c & 63);
    }

    return out;
}

const TARGET_SCORE = "9776";
const FIXED_SUFFIX = "I3NidzN2Vme2Y6YweWO8IDMmRWY5MTO";

let url = $request.url;
let body = $request.body;

try {
    // 1. 修改 URL 中的 gameScore
    if (url.includes("gameScore=")) {
        url = url.replace(/gameScore=\d+/g, "gameScore=" + TARGET_SCORE);
    }

    // 2. 修改请求体
    if (body) {
        let obj = JSON.parse(body);

        // achieve = Base64("9776")，这里是带双引号的字符串
        let scoreWithQuotes = '"' + TARGET_SCORE + '"';
        obj.achieve = base64Encode(scoreWithQuotes) + FIXED_SUFFIX;

        // 同步修改 body 中的 gameScore
        if (Object.prototype.hasOwnProperty.call(obj, "gameScore")) {
            obj.gameScore = parseInt(TARGET_SCORE, 10);
        }

        body = JSON.stringify(obj);
        console.log("achieve => " + obj.achieve);
        console.log("body => " + body);
    }
} catch (e) {
    console.log("script error => " + e);
}

$done({ url, body });
