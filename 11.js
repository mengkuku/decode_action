/**
 * 脚本功能：动态消消乐分数修改 (Quantumult X)
 * 逻辑：自动获取分数 -> 转为 "分数" -> Base64 -> 拼接固定后缀
 */

let url = $request.url;
let body = $request.body;

// 固定后缀
const fixedSuffix = "I3NidzN2Vme2Y6YweWO8IDMmRWY5MTO";

// 1. 尝试从 URL 中动态提取分数
let currentScore = "0";
let scoreMatch = url.match(/gameScore=(\d+)/);
if (scoreMatch) {
    currentScore = scoreMatch[1];
}

// 2. 修改请求体
if (body) {
    try {
        let obj = JSON.parse(body);

        obj.gameScore = 9226;
        // 如果想保持原样只修复加密，则直接读取 obj 里的分数
        if (obj.gameId) {
            let scoreToProcess = obj.gameScore || currentScore;
            
            // 核心逻辑：将分数转为带双引号的字符串，例如 9300 -> "9300"
            let strWithQuotes = '"' + scoreToProcess + '"';
            
            // 进行 Base64 编码
            // btoa 是 JS 原生支持的 Base64 转换函数
            let encodedScore = btoa(strWithQuotes);
            
            // 重新拼接成新的 achieve 字段
            obj['achieve'] = encodedScore + fixedSuffix;
            
            console.log("成功处理分数: " + scoreToProcess + " -> 加密串: " + obj['achieve']);
        }

        body = JSON.stringify(obj);
    } catch (e) {
        console.log("解析或编码失败: " + e);
    }
}

$done({ url: url, body: body });
