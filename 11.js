/**
 * 脚本功能：消消乐分数修改 (Quantumult X)
 * 逻辑：修改 URL 参数 gameScore，并重写请求体中的 achieve 字段（Base64 固定）
 */

let url = $request.url;
let body = $request.body;

// 1. 修改 URL 中的 gameScore 参数
if (url.indexOf("gameScore=") != -1) {
    // 这里修改为你希望设置的游戏分数（例如 9000），或者你可以动态获取游戏分数
    url = url.replace(/gameScore=\d+/g, "gameScore=9000");
}

// 2. 修改请求体 (Body) 中的参数
if (body) {
    try {
        let obj = JSON.parse(body);
        
        // 固定的 Base64 编码后缀
        const fixedSuffix = "I3NidzN2Vme2Y6YweWO8IDMmRWY5MTO";
        // 游戏分数动态获取，假设你通过请求中的字段获取游戏分数
        const gameScore = obj.gameScore || 9000; // 如果没有 gameScore 字段，则默认 9000
        const newScoreBase64 = base64Encode(gameScore.toString()); // 将分数转换为 Base64 编码
        
        // 修改 achieve 字段
        if (obj.hasOwnProperty('achieve')) {
            obj['achieve'] = newScoreBase64 + fixedSuffix;
        }

        // 如果 Body 里也有 gameScore 字段，一并修改
        if (obj.hasOwnProperty('gameScore')) {
            obj['gameScore'] = gameScore;
        }

        body = JSON.stringify(obj);
    } catch (e) {
        console.log("解析请求体失败: " + e);
    }
}

// 3. 结果返回
$done({ url: url, body: body });

// Base64 编码函数
function base64Encode(str) {
    return Buffer.from(str).toString('base64'); // 使用 Node.js 的 Buffer 来进行 Base64 编码
}
