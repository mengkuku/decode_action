/**
 * 脚本功能：消消乐分数修改 (Quantumult X)
 * 逻辑：修改 URL 参数 gameScore，并重写请求体中的 achieve 字段（Base64 固定）
 */
[rewrite_local]
^https?:\/\/.*\.hdpyqe\.com\/api\/playerJoinGame\/achieve url script-request-body elsb_mod.js
[mitm]
hostname = *.hdpyqe.com

// 自定义 Base64 函数 (QX 专用)
function base64Encode(str) {
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

const TARGET_SCORE = "9000"; 
const FIXED_SUFFIX = "I3NidzN2Vme2Y6YweWO8IDMmRWY5MTO";

let url = $request.url;
let body = $request.body;

try {
    // 1. 修改 URL 里的分数
    if (url.indexOf("gameScore=") !== -1) {
        url = url.replace(/gameScore=\d+/g, "gameScore=" + TARGET_SCORE);
    }

    // 2. 修改 Body 里的分数和加密串
    if (body) {
        let obj = JSON.parse(body);

        // 核心修改逻辑：拼双引号再编码
        // 如果 targetScore 是 9000，这里 scoreWithQuotes 就是 "9000"
        let scoreWithQuotes = '"' + TARGET_SCORE + '"'; 
        
        // 编码后的字符串拼接固定后缀
        obj['achieve'] = base64Encode(scoreWithQuotes) + FIXED_SUFFIX;
        
        // 数值字段也改掉
        if (obj.hasOwnProperty('gameScore')) obj['gameScore'] = parseInt(TARGET_SCORE);

        body = JSON.stringify(obj);
        console.log("✅ 成功! achieve: " + obj['achieve']);
    }
} catch (e) {
    console.log("❌ 脚本错误: " + e);
}

$done({ url: url, body: body });
