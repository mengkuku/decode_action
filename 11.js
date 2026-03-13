// 最简测试脚本
let body = $request.body;
console.log("拦截成功，原始body: " + body);
$done({ body: body });
