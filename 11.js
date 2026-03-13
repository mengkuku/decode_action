/**
 * 脚本功能：动态消消乐分数修改 (修复版)
 * 报错处理：针对 "Resource parse result is invalid" 优化
 */

let url = $request.url;
let body = $request.body;

// 自定义 Base64 编码函数，防止 QX 环境不支持 btoa
function safeBase64(str) {
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

const fixedSuffix = "I3NidzN2Vme2Y6YweWO8IDMmRWY5MTO";

try {
    if (body) {
        let obj = JSON.parse(body);
        
        // 1. 设置你想要的分数
        let targetScore = "9000"; 
        
        // 2. 修改 Body 里的 gameScore
        if (obj.hasOwnProperty('gameScore')) {
            obj['gameScore'] = parseInt(targetScore);
        }

        // 3. 构造 achieve: Base64('"9000"') + 后缀
        let scoreWithQuotes = '"' + targetScore + '"';
        let encodedScore = safeBase64(scoreWithQuotes);
        obj['achieve'] = encodedScore + fixedSuffix;

        body = JSON.stringify(obj);
        console.log("修改成功: Score=" + targetScore);
    }

    // 4. 修改 URL 里的分数参数
    if (url.indexOf("gameScore=") !== -1) {
        url = url.replace(/gameScore=\d+/g, "gameScore=9000");
    }

} catch (e) {
    console.log("脚本执行出错: " + e);
}

// 关键：QX 的 $done 必须返回一个对象，且属性名要准确
$done({ url: url, body: body });
