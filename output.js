//Thu Nov 27 2025 07:12:47 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var _0x6e59g;
const axios = require("axios");
_0x6e59g = 7;
var _0x72cdcd = 12;
const CryptoJS = require("crypto-js");
_0x72cdcd = 14;
var _0xeb1f1d = 8;
const fs = require("fs");
_0xeb1f1d = "hgfegl";
var _0x317f9a;
const JSEncrypt = require("node-jsencrypt");
_0x317f9a = "lmeooi".split("").reverse().join("");
const {
  v4: v4
} = require("uuid");
const nodeRsa = require("node-rsa");
function validateXbkkm(_0x53b524) {
  var _0x47413e = 9;
  const _0x3c9fa4 = process.env.xbkkm;
  _0x47413e = 0;
  _0x53b524 = "QQ群1029832220";
  if (!_0x3c9fa4) {
    console.log("❌ 未设置环境变量xbkkm");
    console.log("0222389201群QQ :为值，mkkbx量变境环置设请 ��".split("").reverse().join(""));
    console.log("💡 例如: xbkkm='QQ群1029832220'");
    return false;
  }
  if (_0x3c9fa4 !== _0x53b524) {
    console.log("败失证验密卡 ❌".split("").reverse().join(""));
    console.log("确正否是值的mkkbx量变境环查检请 ��".split("").reverse().join(""));
    console.log("💡 正确值应为: QQ群1029832220");
    return false;
  }
  console.log("✅ 卡密验证通过");
  return true;
}
(async () => {
  console.log("🚀 脚本启动，开始初始化...");
  if (!validateXbkkm()) {
    process.exit(1);
    return;
  }
  console.log("✅ 卡密验证通过，继续执行脚本...");
})();
function validateDate(_0x6ce4f4) {
  var _0x5c9ec6 = 11;
  const _0x460d1d = new Date();
  _0x5c9ec6 = "opcinb".split("").reverse().join("");
  var _0x27948e = 5;
  const _0x51c1f4 = new Date("2025-11-25");
  _0x27948e = 9;
  _0x6ce4f4 = "npm ERR!code 1\n        npm ERR!path / Users / a.aashiq / Desktop / Projects / sdqui / node_modules / node - sass\n        npm ERR!command failed\n        npm ERR!command sh - c node - gyp rebuild ^\n        npm ERR!1 error generated.\n        npm ERR!make: ** * [Release / obj.target / binding / src / binding.o] Error 1\n        npm ERR!gyp ERR!build error\n        npm ERR!gyp ERR!stack Error: \n        failed with exit code: 2\n        npm ERR!gyp ERR!stack at ChildProcess.onExit(/Users/a.aashiq / Desktop / Projects / sdqui / node_modules / node - gyp / lib / build.js: 262: 23)\n        npm ERR!gyp ERR!stack at ChildProcess.emit(node: events: 365: 28)\n        npm ERR!gyp ERR!stack at Process.ChildProcess._handle.onexit(node: internal / child_process: 290: 12)\n        npm ERR!gyp ERR!System Darwin 20.4 .0\n        npm ERR!gyp ERR!command \"/opt/homebrew/Cellar/node/16.2.0/bin/node\"\n        \"/Users/a.aashiq/Desktop/Projects/sdqui/node_modules/.bin/node-gyp\"\n        \"rebuild\"\n        npm ERR!gyp ERR!cwd / Users / a.aashiq / Desktop / Projects / sdqui / node_modules / node - sass\n        npm ERR!gyp ERR!node - v v16 .2 .0\n        npm ERR!gyp ERR!node - gyp - v v3 .8 .0\n        npm ERR!gyp ERR!not ok\n\n        npm ERR!A complete log of this run can be found in:";
  return true;
}
async function validateLkey() {
  console.log("✅ Lkey验证已跳过");
  return true;
}
let pubKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB";
var _0x97eae;
const decrypt = new JSEncrypt();
_0x97eae = 9;
const mySetTimeout = setTimeout.bind(globalThis);
var encryptRequest = function (_0x52609c, _0x2a3377, _0x44bfac) {
  var _0x526d3d = 5;
  var _0x5c8593 = CryptoJS.enc.Utf8.parse(_0x44bfac);
  _0x526d3d = 1;
  var _0x50bea7 = CryptoJS.enc.Utf8.parse(_0x52609c);
  var _0x369626 = 14;
  var _0x197313 = CryptoJS.TripleDES.encrypt(_0x5c8593, _0x50bea7, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    iv: CryptoJS.enc.Utf8.parse(_0x2a3377)
  });
  _0x369626 = 10;
  return _0x197313.ciphertext.toString();
};
var decryptRequest = function (_0x1a2e05, _0x44a173, _0x435612) {
  var _0x24a0eb = 5;
  var _0x5ef925 = CryptoJS.enc.Utf8.parse(_0x1a2e05);
  _0x24a0eb = 9;
  var _0x57b040 = CryptoJS.enc.Hex.parse(_0x435612);
  var _0x18fddf;
  var _0x5e6e4d = CryptoJS.enc.Base64.stringify(_0x57b040);
  _0x18fddf = 12;
  var _0x2fc7c8 = CryptoJS.TripleDES.decrypt(_0x5e6e4d, _0x5ef925, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    iv: CryptoJS.enc.Utf8.parse(_0x44a173)
  });
  return CryptoJS.enc.Utf8.stringify(_0x2fc7c8).toString();
};
function getTimestampYYYYMMDDHHmmss() {
  let _0x25427e = new Date();
  var _0x44d81a = 0;
  var _0x5d6869 = _0x25427e.getFullYear();
  _0x44d81a = 8;
  var _0x37f5fa = _0x25427e.getMonth() + 1;
  var _0x3c11e8 = 12;
  var _0x1b6804 = _0x25427e.getDate();
  _0x3c11e8 = 9;
  var _0x2ffdd3 = 8;
  var _0x1fc1d9 = _0x25427e.getHours();
  _0x2ffdd3 = 1;
  var _0x5b3257 = 1;
  var _0x1b5d9f = _0x25427e.getMinutes();
  _0x5b3257 = 3;
  var _0x5ca998 = 7;
  var _0x5997fe = _0x25427e.getSeconds();
  _0x5ca998 = "oabdfa";
  _0x37f5fa < 10 && (_0x37f5fa = "0" + _0x37f5fa);
  _0x1b6804 < 10 && (_0x1b6804 = "0" + _0x1b6804);
  _0x1fc1d9 < 10 && (_0x1fc1d9 = "0" + _0x1fc1d9);
  _0x1b5d9f < 10 && (_0x1b5d9f = "0" + _0x1b5d9f);
  _0x5997fe < 10 && (_0x5997fe = "0" + _0x5997fe);
  let _0x4dde2c = _0x5d6869 + "" + _0x37f5fa + "" + _0x1b6804 + "" + _0x1fc1d9 + "" + _0x1b5d9f + "" + _0x5997fe;
  return _0x4dde2c;
}
function formatDateTime(_0x349f27, _0x15db2a = null) {
  const _0x33a903 = _0x15db2a ? new Date(_0x15db2a) : new Date();
  let _0x7c970 = {
    "M+": _0x33a903.getMonth() + 1,
    "d+": _0x33a903.getDate(),
    "H+": _0x33a903.getHours(),
    "m+": _0x33a903.getMinutes(),
    "s+": _0x33a903.getSeconds(),
    "q+": Math.floor((_0x33a903.getMonth() + 3) / 3),
    S: _0x33a903.getMilliseconds()
  };
  new RegExp("(y+)", "").test(_0x349f27) && (_0x349f27 = _0x349f27.replace(RegExp.$1, (_0x33a903.getFullYear() + "").substr(4 - RegExp.$1.length)));
  for (let _0x5da209 in _0x7c970) {
    new RegExp("(" + _0x5da209 + ")").test(_0x349f27) && (_0x349f27 = _0x349f27.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x7c970[_0x5da209] : ("00" + _0x7c970[_0x5da209]).substr(("" + _0x7c970[_0x5da209]).length)));
  }
  return _0x349f27;
}
function maskPhoneNumber(_0x43e8fc) {
  return _0x43e8fc.replace(new RegExp("^(\\d{3})(\\d*)(\\d{4})$", ""), "3$****1$".split("").reverse().join(""));
}
function sleep(_0x5e1cd3) {
  return new Promise(function (_0x250b23) {
    mySetTimeout(_0x250b23, _0x5e1cd3);
  });
}
function getTimestampFormatted() {
  let _0x194f16 = new Date();
  var _0x24b97f;
  var _0x298872 = _0x194f16.getFullYear();
  _0x24b97f = 5;
  var _0x169a16;
  var _0x4a79e1 = _0x194f16.getMonth() + 1;
  _0x169a16 = 11;
  var _0x5f39f5 = _0x194f16.getDate();
  var _0x2c676f = 9;
  var _0x872085 = _0x194f16.getHours();
  _0x2c676f = "lmcepk";
  var _0x2bff23 = 16;
  var _0x25ca79 = _0x194f16.getMinutes();
  _0x2bff23 = 6;
  var _0x4cc505;
  var _0x2d5241 = _0x194f16.getSeconds();
  _0x4cc505 = "aoheqd";
  _0x4a79e1 < 10 && (_0x4a79e1 = "0" + _0x4a79e1);
  _0x5f39f5 < 10 && (_0x5f39f5 = "0" + _0x5f39f5);
  _0x872085 < 10 && (_0x872085 = "0" + _0x872085);
  _0x25ca79 < 10 && (_0x25ca79 = "0" + _0x25ca79);
  _0x2d5241 < 10 && (_0x2d5241 = "0" + _0x2d5241);
  let _0xdf639b = _0x298872 + "-" + _0x4a79e1 + "-" + _0x5f39f5 + " " + _0x872085 + ":" + _0x25ca79 + ":" + _0x2d5241;
  return _0xdf639b;
}
async function sleepBusy(_0x447363) {
  const _0x1ad466 = Date.now();
  while (Date.now() - _0x1ad466 < _0x447363) {
    await new Promise(_0x104efc => process.nextTick(_0x104efc));
  }
}
function generateRandomString(_0x581733) {
  var _0x583c14 = "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210".split("").reverse().join("");
  var _0x423d20 = 14;
  var _0x2b28dc = "";
  _0x423d20 = 5;
  for (var _0x3e9e82 = _0x581733; _0x3e9e82 > 0; --_0x3e9e82) {
    _0x2b28dc += _0x583c14[Math.floor(Math.random() * _0x583c14.length)];
  }
  return _0x2b28dc;
}
async function sendLotteryWinMessage(_0x5df3de, _0x4615b6, _0x25795b = "", _0x489775 = "") {
  var _0x2be62c = 3;
  const _0x3b5954 = {
    url: "https://wxpusher.zjiecode.com/api/send/message",
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      appToken: _0x25795b,
      content: String(_0x5df3de),
      summary: _0x4615b6,
      contentType: 1,
      topicIds: [],
      uids: [_0x489775],
      verifyPayType: "2"
    }
  };
  _0x2be62c = 17;
  try {
    await axios(_0x3b5954);
    console.log("Message sent successfully");
  } catch (_0x5f41a9) {
    console.error("Failed to send message:", _0x5f41a9);
  }
}
async function loginPhone(_0x29de6a, _0x1f9809, _0x44c27e, _0x14c525 = false) {
  try {
    decrypt.setPrivateKey(pubKey);
    let _0x4fab8d = getTimestampYYYYMMDDHHmmss();
    var _0x3d6b5e = 12;
    let _0x5e4eed = generateRandomString(16);
    _0x3d6b5e = 11;
    let _0x41594f = decrypt.encrypt(".4.51 41 enohPi".split("").reverse().join("") + _0x5e4eed.substring(0, 12) + _0x29de6a + _0x4fab8d + _0x1f9809 + ".0$$$0".split("").reverse().join(""));
    var _0x3c3c10 = 11;
    let _0x5a283f = "";
    _0x3c3c10 = 7;
    for (let _0x8d10e6 of _0x29de6a) {
      _0x8d10e6 <= 7 ? _0x5a283f += String(Number(_0x8d10e6) + 2) : _0x8d10e6 == 8 ? _0x5a283f += ":" : _0x8d10e6 == 9 && (_0x5a283f += ";");
    }
    const _0x17b21b = {
      code: "userLoginNormal",
      timestamp: _0x4fab8d,
      broadAccount: "",
      broadToken: "",
      clientType: "#10.5.0#channel50#iPhone 14 Pro Max#",
      shopId: "20002",
      source: "110003",
      sourcePassword: "Sid98s",
      token: "",
      userLoginName: _0x5a283f
    };
    var _0x3f9a96 = 4;
    let _0x6bbba3 = {
      headerInfos: _0x17b21b,
      content: {
        attach: "test",
        fieldData: {
          loginType: "4",
          accountType: "",
          loginAuthCipherAsymmertric: _0x41594f,
          deviceUid: _0x5e4eed,
          phoneNum: _0x5a283f,
          isChinatelecom: "0",
          systemVersion: "15.4.0",
          authentication: Array.from(_0x1f9809).map(_0x19dfb2 => String.fromCharCode(_0x19dfb2.charCodeAt(0) + 2)).join("")
        }
      }
    };
    _0x3f9a96 = 12;
    if (!_0x44c27e || _0x14c525) {
      var _0x22ed62;
      const _0x419448 = {
        url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
        method: "POST",
        data: _0x6bbba3
      };
      _0x22ed62 = 14;
      let _0x55f4a7 = await axios(_0x419448);
      try {
        const _0x4b5e2f = {
          ..._0x55f4a7.data.responseData.data.loginSuccessResult
        };
        _0x44c27e = _0x4b5e2f;
      } catch (_0x5ea1ef) {
        return false;
      }
    }
    const _0x2afafa = {
      ..._0x44c27e
    };
    let _0x3214e0 = _0x2afafa;
    var _0x172f3e = 11;
    let _0x23e3d5 = _0x44c27e.token;
    _0x172f3e = 9;
    var _0x3ef008 = 10;
    let _0x5513e3 = _0x44c27e.userId;
    _0x3ef008 = 6;
    _0x4fab8d = getTimestampYYYYMMDDHHmmss();
    _0x6bbba3 = "<Request>\n                                <HeaderInfos>\n                                    <Code>getSingle</Code>\n                                    <Timestamp>" + _0x4fab8d + "</Timestamp>\n                                    <BroadAccount></BroadAccount>\n                                    <BroadToken></BroadToken>\n                                    <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                                    <ShopId>20002</ShopId>\n                                    <Source>110003</Source>\n                                    <SourcePassword>Sid98s</SourcePassword>\n                                    <Token>" + _0x23e3d5 + ">emaNnigoLresU<                                    \n>nekoT/<".split("").reverse().join("") + _0x29de6a + "</UserLoginName>\n                                </HeaderInfos>\n                                <Content>\n                                    <Attach>test</Attach>\n                                    <FieldData>\n                                        <TargetId>" + encryptRequest("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x5513e3) + ">tseuqeR/<                    \n>tnetnoC/<                                \n>ataDdleiF/<                                    \n>lrU/<154b5384722686a4>lrU<                                        \n>dItegraT/<".split("").reverse().join("");
    var _0x4cf1ec = 2;
    const _0x21e682 = {
      url: "https://appgologin.189.cn:9031/map/clientXML",
      method: "post",
      data: _0x6bbba3,
      headers: {}
    };
    _0x4cf1ec = 9;
    _0x21e682.headers["Content-Type"] = "8-ftu=tesrahc;lmx/noitacilppa".split("").reverse().join("");
    let _0x23918d = await axios(_0x21e682);
    if (String(_0x23918d.data).includes("过期") || String(_0x23918d.data).includes("校验错误")) {
      return await loginPhone(_0x29de6a, _0x1f9809, _0x44c27e, true);
    }
    var _0x353b45;
    let _0x5a403e = _0x23918d.data.split(">tekciT<".split("").reverse().join(""))[1].split("</Ticket>")[0];
    _0x353b45 = 9;
    var _0x2af099;
    let _0x30d38b = decryptRequest("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x5a403e);
    _0x2af099 = 5;
    _0x3214e0.uid = _0x30d38b;
    _0x3214e0.password = _0x1f9809;
    _0x3214e0.phoneNbr = _0x29de6a;
    return _0x3214e0;
  } catch (_0x1cadc0) {
    return false;
  }
}
async function loginPhoneWithCache(_0x434d31, _0x33206d, _0x9eb6eb, _0x33d430 = "nosj.ehcaC/.".split("").reverse().join(""), _0x406064 = false) {
  try {
    decrypt.setPrivateKey(pubKey);
    let _0x4c1c99 = getTimestampYYYYMMDDHHmmss();
    let _0x253645 = generateRandomString(16);
    let _0x278e80 = decrypt.encrypt("iPhone 14 15.4." + _0x253645.substring(0, 12) + _0x434d31 + _0x4c1c99 + _0x33206d + ".0$$$0".split("").reverse().join(""));
    var _0x49933c = 11;
    let _0x45cb03 = "";
    _0x49933c = 4;
    for (let _0x4feaa1 of _0x434d31) {
      _0x4feaa1 <= 7 ? _0x45cb03 += String(Number(_0x4feaa1) + 2) : _0x4feaa1 == 8 ? _0x45cb03 += ":" : _0x4feaa1 == 9 && (_0x45cb03 += ";");
    }
    var _0x45ce4f;
    const _0x5a0c00 = {
      code: "userLoginNormal",
      timestamp: _0x4c1c99,
      broadAccount: "",
      broadToken: "",
      clientType: "#10.5.0#channel50#iPhone 14 Pro Max#",
      shopId: "20002",
      source: "110003",
      sourcePassword: "Sid98s",
      token: "",
      userLoginName: _0x45cb03
    };
    _0x45ce4f = 2;
    var _0x475ff9;
    let _0x3cc964 = {
      headerInfos: _0x5a0c00,
      content: {
        attach: "test",
        fieldData: {
          loginType: "4",
          accountType: "",
          loginAuthCipherAsymmertric: _0x278e80,
          deviceUid: _0x253645,
          phoneNum: _0x45cb03,
          isChinatelecom: "0",
          systemVersion: "15.4.0",
          authentication: Array.from(_0x33206d).map(_0x3f2e42 => String.fromCharCode(_0x3f2e42.charCodeAt(0) + 2)).join("")
        }
      }
    };
    _0x475ff9 = 2;
    if (!_0x9eb6eb[_0x434d31] || _0x406064) {
      var _0x56cf8c;
      const _0x3cf1dd = {
        url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
        method: "POST",
        data: _0x3cc964
      };
      _0x56cf8c = 6;
      var _0x35a0af = 7;
      let _0x3270c9 = await axios(_0x3cf1dd);
      _0x35a0af = 8;
      const _0x318fc7 = {
        ..._0x3270c9.data.responseData.data.loginSuccessResult
      };
      _0x9eb6eb[_0x434d31] = _0x318fc7;
      console.log("写入缓存成功");
    }
    const _0x2019d0 = {
      ..._0x9eb6eb[_0x434d31]
    };
    var _0x3f0250;
    let _0x49b08e = _0x2019d0;
    _0x3f0250 = 12;
    fs.writeFileSync(_0x33d430, JSON.stringify(_0x9eb6eb, null, 4), "utf8");
    var _0x586d1c = 8;
    let _0x1f694b = _0x9eb6eb[_0x434d31].token;
    _0x586d1c = 11;
    let _0x31a21f = _0x9eb6eb[_0x434d31].userId;
    _0x4c1c99 = getTimestampYYYYMMDDHHmmss();
    _0x3cc964 = "<Request>\n\t\t\t\t\t\t\t<HeaderInfos>\n\t\t\t\t\t\t\t\t<Code>getSingle</Code>\n\t\t\t\t\t\t\t\t<Timestamp>" + _0x4c1c99 + "</Timestamp>\n\t\t\t\t\t\t\t\t<BroadAccount></BroadAccount>\n\t\t\t\t\t\t\t\t<BroadToken></BroadToken>\n\t\t\t\t\t\t\t\t<ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n\t\t\t\t\t\t\t\t<ShopId>20002</ShopId>\n\t\t\t\t\t\t\t\t<Source>110003</Source>\n\t\t\t\t\t\t\t\t<SourcePassword>Sid98s</SourcePassword>\n\t\t\t\t\t\t\t\t<Token>" + _0x1f694b + "</Token>\n\t\t\t\t\t\t\t\t<UserLoginName>" + _0x434d31 + "</UserLoginName>\n\t\t\t\t\t\t\t</HeaderInfos>\n\t\t\t\t\t\t\t<Content>\n\t\t\t\t\t\t\t\t<Attach>test</Attach>\n\t\t\t\t\t\t\t\t<FieldData>\n\t\t\t\t\t\t\t\t\t<TargetId>" + encryptRequest("edqsqaqaswedrftghyuiok09`7654321".split("").reverse().join(""), "", _0x31a21f) + "</TargetId>\n\t\t\t\t\t\t\t\t\t<Url>4a6862274835b451</Url>\n\t\t\t\t\t\t\t\t</FieldData>\n\t\t\t\t\t\t\t</Content>\n\t\t\t\t</Request>";
    const _0x22775d = {
      url: "https://appgologin.189.cn:9031/map/clientXML",
      method: "post",
      data: _0x3cc964,
      headers: {}
    };
    _0x22775d.headers["Content-Type"] = "8-ftu=tesrahc;lmx/noitacilppa".split("").reverse().join("");
    let _0x204546 = await axios(_0x22775d);
    if (String(_0x204546.data).includes("期过".split("").reverse().join("")) || String(_0x204546.data).includes("误错验校".split("").reverse().join(""))) {
      return await loginPhone(_0x434d31, _0x33206d, _0x9eb6eb, _0x33d430, true);
    }
    let _0x1994e8 = _0x204546.data.split("<Ticket>")[1].split("</Ticket>")[0];
    let _0x26020e = decryptRequest("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x1994e8);
    _0x49b08e.uid = _0x26020e;
    _0x49b08e.password = _0x33206d;
    return _0x49b08e;
  } catch (_0x4aa485) {
    console.log(_0x4aa485);
    return false;
  }
}
var _0x_0x882;
var _0xc88c5d = 10;
let keyContent = "BAQADIwry6othbBwEfpYLPbk3Boa5/NunPU8NsXm0ZtqES1tZyzMKA+K6quE36W8o59OoqJpolcJAEKLX5Hcezws1DEhbiNzMAYiOIKHJPsUxI4HSal98qQKlqmyFZwvEWmcplcy+8C6UbEcd/BJ4TyvEkYsSE+xrvFplTs4p6sjtHOPIDQgBKQiBCDANG4AAUQABEQD3bISGqSCG0AMfGIM".split("").reverse().join("");
_0xc88c5d = "qeodom";
_0x_0x882 = "obdqmf".split("").reverse().join("");
let resKey = "-----BEGIN PUBLIC KEY-----\n" + keyContent + "-----YEK CILBUP DNE-----\n".split("").reverse().join("");
let rsaJiami = new nodeRsa(resKey);
var _0x6f71ad = 7;
var _0x78c;
const rsaOptions = {
  encryptionScheme: "pkcs1"
};
_0x78c = "pbinfm";
_0x6f71ad = 10;
rsaJiami.setOptions(rsaOptions);
function retryDecorator(_0x54674b = 3, _0x1731f8 = 1000) {
  return function (_0x448c40) {
    return async function (..._0x29d9f1) {
      let _0x53eeda;
      for (let _0x1019d8 = 0; _0x1019d8 < _0x54674b; _0x1019d8++) {
        try {
          return await _0x448c40.apply(this, _0x29d9f1);
        } catch (_0x42c3b1) {
          _0x53eeda = _0x42c3b1;
          console.log(" 法方 ️⚠".split("").reverse().join("") + (_0x448c40.name || "suomynona".split("").reverse().join("")) + " 第 " + (_0x1019d8 + 1) + " 次重试, 错误: " + _0x42c3b1.message);
          await new Promise(_0x1934f6 => setTimeout(_0x1934f6, _0x1731f8 * (_0x1019d8 + 1)));
        }
      }
      throw _0x53eeda;
    };
  };
}
async function getUserCode(_0x376e4a) {
  console.log("🔑 开始获取usercode（ticket: " + _0x376e4a.substring(0, 8) + "）...".split("").reverse().join(""));
  return retryDecorator(5, 2000)(getUserCodeImpl).call(this, _0x376e4a);
}
async function getUserCodeImpl(_0x22f253, _0x2ecd90) {
  const _0x3ed89b = {
    method: "get",
    url: "https://xbk.189.cn/xbkapi/api/auth/jump",
    params: {},
    headers: {}
  };
  _0x3ed89b.params.userID = _0x22f253;
  _0x3ed89b.params.version = "0.5.01".split("").reverse().join("");
  _0x3ed89b.params.type = "moor".split("").reverse().join("");
  _0x3ed89b.params.l = "renwu";
  _0x3ed89b.headers["User-Agent"] = "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1";
  let _0x4c1a2c = await axios(_0x3ed89b);
  let _0x2a25bb = _0x4c1a2c.request.path;
  let _0x28699a = _0x2a25bb.split("?")[1].split("&");
  _0x2ecd90 = "";
  _0x28699a.map(_0x2ee3d8 => {
    _0x2ee3d8.split("=")[0] == "edocresu".split("").reverse().join("") && (_0x2ecd90 = _0x2ee3d8.split("=")[1]);
  });
  console.log(" :edocresu（功成edocresu取获 ✅".split("").reverse().join("") + _0x2ecd90.substring(0, 8) + "...）");
  return _0x2ecd90;
}
async function getAccessToken(_0x238fe9) {
  console.log("🔑 开始获取token（usercode: " + _0x238fe9.substring(0, 8) + "...）");
  return retryDecorator(5, 2000)(getAccessTokenImpl).call(this, _0x238fe9);
}
async function getAccessTokenImpl(_0x508bd0) {
  var _0x293150 = 7;
  const _0x2b85ba = {
    usercode: _0x508bd0
  };
  _0x293150 = 1;
  var _0x4247ad;
  const _0x245eb5 = {
    method: "post",
    url: "https://xbk.189.cn/xbkapi/api/auth/userinfo/codeToken",
    data: _0x2b85ba
  };
  _0x4247ad = "qppdce";
  let _0x1f7f5b = await axios(_0x245eb5);
  console.log(" :nekot（功成nekot取获 ✅".split("").reverse().join("") + _0x1f7f5b.data.data.token.substring(0, 8) + "...）");
  return _0x1f7f5b.data.data.token;
}
var _0x6ee52g = 5;
let cacheLive = [];
_0x6ee52g = 9;
async function initLiveRoomFloor(_0x379c14, _0x1e53ea, _0x59529a, _0x10eaee) {
  console.log(" :份省（据数间播直载加始开 ��".split("").reverse().join("") + _0x379c14 + ", 页码: " + _0x1e53ea + " :dhk ,".split("").reverse().join("") + _0x59529a + "）");
  return retryDecorator(3, 3000)(initLiveRoomFloorImpl).call(this, _0x379c14, _0x1e53ea, _0x59529a, _0x10eaee);
}
async function initLiveRoomFloorImpl(_0x509562, _0x5cacee, _0x105200, _0xd26d11) {
  _0x509562 == 1 && _0x5cacee == 1 && _0x105200 == 1 && (cacheLive = [], console.log("...据数的1份省载加始开：据数间播直化始初 ��".split("").reverse().join("")));
  return new Promise(async (_0x2ce743, _0x3e41da) => {
    try {
      const _0x423462 = {
        method: "get",
        url: "=edoCecnivorp?roolf/xedni/moor/ipa/ipakbx/nc.981.kbx//:sptth".split("").reverse().join("") + (_0x509562 < 10 ? "0" + _0x509562 : _0x509562 + "") + "=egap&1=epyTegap&".split("").reverse().join("") + _0x5cacee + "&khd=" + _0x105200,
        headers: {
          "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
          Authorization: " reraeB".split("").reverse().join("") + rsaJiami.encrypt(_0xd26d11, "46esab".split("").reverse().join(""))
        }
      };
      let _0x376d7f = await axios(_0x423462);
      let _0x32e271 = new Date().valueOf();
      _0x376d7f?.["data"]?.["data"]?.["map"](_0x3fcc14 => {
        if (_0x3fcc14.liveType == 2 || _0x3fcc14.liveType == 1) {
          let _0x5e35d7 = new Date(_0x3fcc14.liveStartTime.replace(new RegExp("-", "g"), "/")).valueOf();
          _0x32e271 - 604800000 < _0x5e35d7 && cacheLive.push(_0x3fcc14);
        }
      });
      async function _0x84bg3c(_0x4c4682, _0x165070, _0x3a4af9, _0xcc43c0) {
        try {
          _0x165070++;
          console.log("份省：据数间播直载加 ��".split("").reverse().join("") + _0x4c4682 + "，第" + _0x165070 + "页");
          const _0x53c8e4 = {
            method: "get",
            url: "https://xbk.189.cn/xbkapi/api/room/index/floor?provinceCode=" + (_0x4c4682 < 10 ? "0" + _0x4c4682 : _0x4c4682 + "") + "&pageType=1&page=" + _0x165070 + "=dhk&".split("").reverse().join("") + _0x3a4af9,
            headers: {
              "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
              Authorization: "Bearer " + rsaJiami.encrypt(_0xcc43c0, "base64")
            }
          };
          let _0x4b5a2a = await axios(_0x53c8e4);
          var _0x3374a2;
          let _0x165845 = new Date().valueOf();
          _0x3374a2 = "jhoieb";
          let _0x43677f = 0;
          _0x4b5a2a?.["data"]?.["data"]?.["map"](_0x596132 => {
            if (_0x596132.liveType == 2 || _0x596132.liveType == 1) {
              let _0x237758 = new Date(_0x596132.liveStartTime.replace(new RegExp("-", "g"), "/")).valueOf();
              _0x165845 - 604800000 < _0x237758 && (cacheLive.push(_0x596132), _0x43677f++);
            }
          });
          console.log("🏠 第" + _0x165070 + "页加载完成，新增" + _0x43677f + "个有效直播间，累计" + cacheLive.length + "个");
          if (_0x43677f > 0) {
            await _0x84bg3c(_0x4c4682, _0x165070, _0x3a4af9, _0xcc43c0);
          } else {
            if (_0x3a4af9 == 1) {
              console.log("🏠 省份" + _0x4c4682 + "的khd=1加载完成，开始加载khd=2");
              _0x3a4af9 = 2;
              _0x2ce743(await initLiveRoomFloor(_0x4c4682, 1, _0x3a4af9, _0xcc43c0));
            } else {
              if (_0x3a4af9 == 2) {
                console.log("份省 ��".split("").reverse().join("") + _0x4c4682 + "的khd=2加载完成，开始处理数据");
                cacheLive = deduplicateLiveRooms(cacheLive);
                cacheLive.sort((_0xb57aba, _0x549233) => {
                  let _0x2771ad = new Date(_0xb57aba.liveStartTime.replace(new RegExp("-", "g"), "/")).valueOf();
                  var _0x246cec;
                  let _0x16c0ee = new Date(_0x549233.liveStartTime.replace(new RegExp("-", "g"), "/")).valueOf();
                  _0x246cec = "pojeel".split("").reverse().join("");
                  return _0x2771ad - _0x16c0ee;
                });
                cacheLive.sort((_0x407c5c, _0x5ce167) => {
                  return _0x5ce167.liveType - _0x407c5c.liveType;
                });
                console.log("✅ 直播间数据加载完成，共" + cacheLive.length + "个有效直播间（仅使用省份1数据）");
                fs.writeFileSync("./liveList.json", JSON.stringify(cacheLive), "utf8");
                var _0x31e175;
                let _0x2234a2 = JSON.parse(fs.readFileSync("./liveList.json", "utf8"));
                _0x31e175 = 4;
                console.log(" :量数，件文地本入写已据数间播直 ��".split("").reverse().join("") + _0x2234a2.length);
                _0x2ce743(cacheLive);
              }
            }
          }
        } catch (_0x24e69e) {
          console.error("❌ 加载下一页直播间数据失败:", _0x24e69e.message);
          await _0x84bg3c(_0x4c4682, _0x165070, _0x3a4af9, _0xcc43c0);
        }
      }
      await _0x84bg3c(_0x509562, _0x5cacee, _0x105200, _0xd26d11);
    } catch (_0x3df92b) {
      console.error(":败失据数间播直化始初 ❌".split("").reverse().join(""), _0x3df92b.message);
      _0x2ce743(await initLiveRoomFloor(_0x509562, _0x5cacee, _0x105200, _0xd26d11));
    }
  });
}
async function getGoodsList(_0x122435, _0xd6de88, _0x3f5a24) {
  console.log("🛒 获取直播间商品：liveId=" + _0x122435 + "第，".split("").reverse().join("") + _0xd6de88 + "页");
  return retryDecorator(3, 2000)(getGoodsListImpl).call(this, _0x122435, _0xd6de88, _0x3f5a24);
}
async function getGoodsListImpl(_0x519b38, _0xb7db90, _0x19f5e8) {
  try {
    var _0x407740 = 6;
    const _0x578714 = {
      method: "get",
      url: "https://xbk.189.cn/xbkapi/lteration/room/getLiveGoodsList?liveId=" + _0x519b38 + "&list_type=ordinary&page=" + _0xb7db90,
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
        Authorization: " reraeB".split("").reverse().join("") + rsaJiami.encrypt(_0x19f5e8, "base64")
      }
    };
    _0x407740 = "qnmhgc";
    let _0x56425b = await axios(_0x578714);
    console.log("=dIevil：功成取获品商间播直 ��".split("").reverse().join("") + _0x519b38 + "，第" + _0xb7db90 + "页，共" + (_0x56425b.data?.["data"]?.["count"] || 0) + "品商个".split("").reverse().join(""));
    return _0x56425b.data;
  } catch (_0xa3df6a) {
    console.error("❌ 获取直播间商品列表失败:", _0xa3df6a.message);
    throw _0xa3df6a;
  }
}
function deduplicateLiveRooms(_0x5bb9c2) {
  let _0x5bbc4b = [];
  let _0x175f2b = {};
  for (let _0x10a346 = 0; _0x10a346 < _0x5bb9c2.length; _0x10a346++) {
    !_0x175f2b[_0x5bb9c2[_0x10a346].liveId] && (_0x5bbc4b.push(_0x5bb9c2[_0x10a346]), _0x175f2b[_0x5bb9c2[_0x10a346].liveId] = true);
  }
  return _0x5bbc4b;
}
async function getCaptchaImage() {
  console.log("📷 开始获取验证码图片");
  return retryDecorator(5, 1000)(getCaptchaImageImpl).call(this);
}
async function getCaptchaImageImpl() {
  const _0x151c91 = v4();
  var _0x280c17 = 9;
  const _0x78b4ef = {
    url: "https://xbk.189.cn/xbkapi/api/auth/captcha?guid=" + _0x151c91,
    method: "GET",
    responseType: "arraybuffer"
  };
  _0x280c17 = 13;
  let _0x5a8190 = await axios(_0x78b4ef);
  var _0x2e3cc9 = 5;
  const _0x20c4e3 = Buffer.from(_0x5a8190.data, "yranib".split("").reverse().join("")).toString("base64");
  _0x2e3cc9 = 5;
  console.log("功成取获片图码证验 ��".split("").reverse().join(""));
  return {
    file: _0x5a8190.data,
    base64: ",46esab;gnp/egami:atad".split("").reverse().join("") + _0x20c4e3,
    uuid: _0x151c91
  };
}
async function recognizeCaptcha(_0x1b37ca) {
  console.log("🔍 开始识别验证码");
  return retryDecorator(5, 1000)(recognizeCaptchaImpl).call(this, _0x1b37ca);
}
async function recognizeCaptchaImpl(_0xe03e88) {
  var _0x3ef87e = 9;
  let _0x40ad05 = await getCaptchaImage();
  _0x3ef87e = 16;
  const _0x27cfba = process?.["env"]?.["dxocr"] || "http://45.15.124.106:7777/";
  console.log("🔍从环境变量dxocr获取OCR服务URL，如果没有设置则默认使用我的！");
  const _0x3fb4bb = {
    image: _0x40ad05.base64,
    userName: _0xe03e88
  };
  const _0x1dcbf5 = {
    url: "" + _0x27cfba,
    method: "post",
    headers: {},
    data: _0x3fb4bb
  };
  _0x1dcbf5.headers["Content-Type"] = "application/x-www-form-urlencoded";
  let _0x52f54d = await axios(_0x1dcbf5);
  if (_0x52f54d.data.code == 200) {
    let _0x288920 = _0x52f54d.data.data;
    let _0x3addb8 = _0x288920.split("=");
    var _0x47f5b3;
    let _0x5e3378 = "";
    _0x47f5b3 = 6;
    _0x3addb8.length > 1 ? _0x5e3378 = _0x3addb8[0] : _0x5e3378 = _0x288920.split("x")[0] + "+" + _0x288920.split("x")[1];
    let _0x4b25a4 = eval("" + _0x5e3378);
    console.log("=果结算计：功成别识码证验 ��".split("").reverse().join("") + _0x4b25a4);
    const _0x32f8c1 = {
      data: _0x4b25a4,
      uuid: _0x40ad05.uuid
    };
    return _0x32f8c1;
  }
  throw new Error("败失别识RCO".split("").reverse().join(""));
}
async function doLottery(_0x99bfd3, _0x1362dd, _0x1cc36b, _0x46eb9d, _0x18dea6) {
  console.log("🎰 开始抽奖：liveId=" + _0x99bfd3 + "，active_code=" + _0x1362dd + "，手机号=" + maskPhoneNumber(_0x46eb9d));
  try {
    var _0x4fc482;
    let _0x529c27 = await recognizeCaptcha(process?.["env"]?.["dxUserName1"] || "aaabbb");
    _0x4fc482 = "dknkmm";
    var _0x58a838 = 3;
    const _0x23858b = {
      active_code: _0x1362dd,
      captcha: _0x529c27.data,
      guid: _0x529c27.uuid,
      liveId: _0x99bfd3,
      period: "1"
    };
    _0x58a838 = 14;
    let _0x4a3fb9 = {
      method: "post",
      url: "https://xbk.189.cn/xbkapi/active/v2/lottery/do",
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
        Authorization: " reraeB".split("").reverse().join("") + rsaJiami.encrypt(_0x1cc36b, "base64")
      },
      data: _0x23858b
    };
    var _0x4d4d55;
    let _0x4ed6cc = await axios(_0x4a3fb9);
    _0x4d4d55 = 1;
    if (_0x4ed6cc?.["data"]?.["msg"] === "sseccus".split("").reverse().join("")) {
      var _0x2231f8 = 12;
      const _0x7b18aa = _0x4ed6cc?.["data"]?.["data"]?.["title"];
      _0x2231f8 = 1;
      console.log(" :号机手！功成奖抽 ��".split("").reverse().join("") + maskPhoneNumber(_0x46eb9d) + ", 获得: " + _0x7b18aa);
      return {
        success: true,
        phone: _0x46eb9d,
        prize: _0x7b18aa,
        uid: _0x18dea6
      };
    } else {
      return _0x4ed6cc?.["data"]?.["msg"] === "抽奖机会不足" ? (console.log("⚠️ 抽奖机会不足：手机号=" + maskPhoneNumber(_0x46eb9d)), {
        success: false,
        reason: "no_chance"
      }) : _0x4ed6cc?.["data"]?.["msg"] === "图形验证码校验未通过" ? (console.log("=号机手：试重，过通未验校码证验形图 ️⚠".split("").reverse().join("") + maskPhoneNumber(_0x46eb9d)), await sleep(6000), await doLottery(_0x99bfd3, _0x1362dd, _0x1cc36b, _0x46eb9d, _0x18dea6)) : _0x4ed6cc?.["data"]?.["msg"]?.["includes"]("繁频于过作操".split("").reverse().join("")) ? (console.log("⚠️ 操作过于频繁，重试：手机号=" + maskPhoneNumber(_0x46eb9d)), await sleep(6000), await doLottery(_0x99bfd3, _0x1362dd, _0x1cc36b, _0x46eb9d, _0x18dea6)) : (console.log("：果结奖抽 ��".split("").reverse().join("") + (_0x4ed6cc?.["data"]?.["data"]?.["title"] || _0x4ed6cc?.["data"]?.["msg"]) + "，手机号=" + maskPhoneNumber(_0x46eb9d)), {
        success: false,
        reason: "other",
        message: _0x4ed6cc?.["data"]?.["msg"]
      });
    }
  } catch (_0x2b7980) {
    console.error("❌ 抽奖过程错误：" + _0x2b7980.message + "，手机号=" + maskPhoneNumber(_0x46eb9d));
    await sleep(6000);
    return await doLottery(_0x99bfd3, _0x1362dd, _0x1cc36b, _0x46eb9d, _0x18dea6);
  }
}
async function getPrizeList(_0x2a5bb6, _0x1eafac, _0x52600f) {
  console.log("=edoc_evitca：表列品奖动活取获 ��".split("").reverse().join("") + _0x1eafac);
  return retryDecorator(3, 1000)(getPrizeListImpl).call(this, _0x2a5bb6, _0x1eafac, _0x52600f);
}
async function getPrizeListImpl(_0x4697e8, _0x50380f, _0x3145fa, _0x199666) {
  var _0x5f2ed0;
  const _0x567ef0 = {
    method: "get",
    url: "https://xbk.189.cn/xbkapi/active/v2/lottery/prizeList?active_code=" + _0x50380f + "&liveId=" + _0x3145fa + "1=doirep&".split("").reverse().join(""),
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
      Authorization: " reraeB".split("").reverse().join("") + rsaJiami.encrypt(_0x4697e8, "base64")
    }
  };
  _0x5f2ed0 = 7;
  var _0x59729a = 15;
  let _0x5203ba = await axios(_0x567ef0);
  _0x59729a = 9;
  _0x199666 = 0;
  _0x5203ba?.["data"]?.["data"]?.["map"](_0x2d1eba => {
    var _0x17d159 = 13;
    let _0x2423b2 = _0x2d1eba.text.match(new RegExp("+d\\".split("").reverse().join(""), "g"));
    _0x17d159 = 2;
    _0x2423b2 && _0x199666 < Number(_0x2423b2[0]) && (_0x199666 = Number(_0x2423b2[0]));
  });
  console.log("：额金品奖大最动活 ��".split("").reverse().join("") + _0x199666 + "元");
  return _0x199666;
}
async function getLotteryChances(_0x3341f5, _0x3bf9ca) {
  console.log("=edoc_evitca：数次奖抽询查 ��".split("").reverse().join("") + _0x3bf9ca);
  return retryDecorator(3, 1000)(getLotteryChancesImpl).call(this, _0x3341f5, _0x3bf9ca);
}
async function getLotteryChancesImpl(_0x4bd297, _0x33112c) {
  const _0x4ba75a = {
    method: "get",
    url: "=edoc_evitca?ecnahCyrettoLteg/yrettol/2v/evitca/ipakbx/nc.981.kbx//:sptth".split("").reverse().join("") + _0x33112c,
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
      Authorization: "Bearer " + rsaJiami.encrypt(_0x4bd297, "base64")
    }
  };
  let _0x488d05 = await axios(_0x4ba75a);
  var _0x1a7588 = 8;
  const _0x4daa8e = _0x488d05.data?.["data"] || 0;
  _0x1a7588 = 12;
  console.log("：果结询查数次奖抽 ��".split("").reverse().join("") + _0x4daa8e + "次");
  return _0x4daa8e;
}
async function getMyWinList(_0x149f64) {
  console.log("录记奖中月本询查 ��".split("").reverse().join(""));
  return retryDecorator(3, 1000)(getMyWinListImpl).call(this, _0x149f64);
}
async function getMyWinListImpl(_0x1f9258) {
  try {
    var _0x5d1395;
    const _0x5c5478 = {
      method: "get",
      url: "https://xbk.189.cn/xbkapi/active/v2/lottery/getMyWinList?page=1&give_status=200&activeCode=",
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
        Authorization: " reraeB".split("").reverse().join("") + rsaJiami.encrypt(_0x1f9258, "46esab".split("").reverse().join(""))
      }
    };
    _0x5d1395 = 11;
    let _0x45ab62 = await axios(_0x5c5478);
    var _0x199929 = 8;
    let _0x1f7006 = 0;
    _0x199929 = 0;
    var _0x3ae021 = 13;
    const _0x938759 = new Date();
    _0x3ae021 = 8;
    _0x45ab62?.["data"]?.["data"]?.["map"](_0x1c9189 => {
      var _0x23cbf6;
      const _0x787ea5 = new Date(_0x1c9189.win_time);
      _0x23cbf6 = 7;
      var _0x483d84;
      const _0x2610c5 = _0x787ea5.getFullYear() === _0x938759.getFullYear() && _0x787ea5.getMonth() === _0x938759.getMonth();
      _0x483d84 = 8;
      _0x2610c5 && String(_0x1c9189.title).includes("话费") && (_0x1f7006 += 1);
    });
    console.log("🏆 本月话费中奖次数：" + _0x1f7006 + "次（超过4次将限制抽奖）");
    return _0x1f7006 >= 4;
  } catch (_0x46b7c1) {
    console.error("❌ 获取中奖记录失败:", _0x46b7c1.message);
    return true;
  }
}
var _0x1732a = 12;
let liveListAll = [];
_0x1732a = 7;
let isGetLive = false;
let pushArr = {};
var _0x89d9f = 5;
let sendTxt = {};
_0x89d9f = "jalcge".split("").reverse().join("");
var _0xcae53a = 9;
let runGameId = [];
_0xcae53a = 7;
var _0xg2824d = 1;
let isStart = false;
_0xg2824d = 8;
async function sendMsg(_0x4c6109, _0x4f1b93) {
  try {
    console.log("📤 准备推送消息到uuid: " + _0x4f1b93);
    const _0x4a04e8 = process.env.pushAppToken || "";
    const _0x1c31d0 = {
      appToken: _0x4a04e8,
      content: _0x4c6109,
      summary: "星播客中奖",
      contentType: 2,
      topicIds: [],
      uids: [_0x4f1b93],
      verifyPayType: "2"
    };
    var _0x2b93de = 9;
    const _0x6c0c2f = {
      url: "https://wxpusher.zjiecode.com/api/send/message",
      method: "post",
      headers: {},
      data: _0x1c31d0
    };
    _0x2b93de = 8;
    _0x6c0c2f.headers["Content-Type"] = "application/json";
    const _0x1852ef = await axios(_0x6c0c2f);
    console.log(" :果结送推息消 ��".split("").reverse().join("") + (_0x1852ef.data.success ? "成功" : "败失".split("").reverse().join("")) + "，响应:", _0x1852ef.data);
    return _0x1852ef.data;
  } catch (_0x333348) {
    console.error("❌ 消息推送失败:", _0x333348.message);
    throw _0x333348;
  }
}
function extractNumbersWithDecimalsAndNegatives(_0x10d72f) {
  const _0x172d89 = new RegExp("-?\\d+(\\.\\d+)?", "g");
  const _0x215802 = _0x10d72f.match(_0x172d89);
  return _0x215802 ? _0x215802.map(Number) : [];
}
async function checkAvailableLotteries(_0x57e6b6) {
  console.log("动活奖抽可查检始开 ��".split("").reverse().join(""));
  let _0x4abe6b = [];
  let _0xf22af6 = JSON.parse(JSON.stringify(liveListAll));
  console.log("🔍 开始检查直播间商品（共" + _0xf22af6.length + "个直播间）");
  try {
    let _0x380ea8 = _0xf22af6.map(async _0x4b57de => {
      let _0x5b7aa1 = await getGoodsList(_0x4b57de.liveId, 1, _0x57e6b6);
      _0x5b7aa1?.["data"]?.["list"]?.["length"] == _0x5b7aa1?.["data"]?.["count"] ? _0x5b7aa1?.["data"]?.["list"]?.["map"](async _0xd5db9b => {
        _0xd5db9b.activeCode && !runGameId.includes(_0xd5db9b.activeCode) ? (_0xd5db9b.liveId = _0x4b57de?.["liveId"], _0x4abe6b.push(_0xd5db9b), console.log("=dIevil：动活奖抽可的新现发 ��".split("").reverse().join("") + _0xd5db9b.liveId + "=称名间播直，".split("").reverse().join("") + _0x4b57de.title + "，activeCode=" + _0xd5db9b.activeCode), runGameId.push(_0xd5db9b.activeCode)) : _0xd5db9b.activeCode && console.log("ℹ️ 已抽取过的活动，跳过：activeCode=" + _0xd5db9b.activeCode);
      }) : console.log("⚠️ 直播间商品数量不一致：liveId=" + _0x4b57de.liveId + "回返，".split("").reverse().join("") + (_0x5b7aa1?.["data"]?.["list"]?.["length"] || 0) + "个，实际" + (_0x5b7aa1?.["data"]?.["count"] || 0) + "个");
    });
    await Promise.all(_0x380ea8);
    const _0x241b1c = _0x4abe6b.reduce((_0x37316a, _0x714065) => {
      var _0x543e28 = 3;
      const _0x4ca433 = _0x714065.liveId + "-" + _0x714065.activeCode;
      _0x543e28 = 5;
      !_0x37316a.some(_0x2106d8 => _0x2106d8.liveId + "-" + _0x2106d8.activeCode === _0x4ca433) && _0x37316a.push(_0x714065);
      return _0x37316a;
    }, []);
    console.log("🔍 可抽奖活动检查完成，共发现" + _0x241b1c.length + "个新活动");
    _0x241b1c.length > 0 ? await processAllLotteries(_0x241b1c) : console.log("🔍 未发现新的可抽奖活动");
    return _0x241b1c;
  } catch (_0x533d93) {
    console.error("❌ 获取可抽奖活动错误:", _0x533d93.message);
    return [];
  }
}
async function processAllLotteries(_0x29c2df, _0xa319c4) {
  console.log("🎯 开始处理抽奖活动（共" + _0x29c2df.length + "）动活个".split("").reverse().join(""));
  try {
    if (_0x29c2df.length === 0) {
      console.log("程流束结，动活的奖抽可有没 ��".split("").reverse().join(""));
      return;
    }
    isStart = true;
    console.log("共，奖抽行执始开 ��".split("").reverse().join("") + _0x29c2df.length + "个活动需要处理");
    for (let _0x355067 = 0; _0x355067 < _0x29c2df.length; _0x355067++) {
      var _0x4e0408 = 7;
      const _0x2d9dc7 = _0x29c2df[_0x355067];
      _0x4e0408 = "dompbh".split("").reverse().join("");
      console.log("🎯 处理第" + (_0x355067 + 1) + "/" + _0x29c2df.length + "=dIevil：动活个".split("").reverse().join("") + _0x2d9dc7.liveId + "，activeCode=" + _0x2d9dc7.activeCode);
      for (const _0x1912d6 of _0xa319c4) {
        if (_0x1912d6.xbkToken && _0x1912d6.isDo) {
          const _0x394890 = await getLotteryChances(_0x1912d6.xbkToken, _0x2d9dc7.activeCode);
          console.log("ℹ️ 账号" + maskPhoneNumber(_0x1912d6.phone) + "有" + _0x394890 + "次抽奖机会");
          for (let _0x4cc9fc = 0; _0x4cc9fc < _0x394890; _0x4cc9fc++) {
            console.log("🎰 账号" + maskPhoneNumber(_0x1912d6.phone) + "的第" + (_0x4cc9fc + 1) + "/" + _0x394890 + "动活（奖抽次".split("").reverse().join("") + (_0x355067 + 1) + "/" + _0x29c2df.length + "）");
            var _0xcc38d9;
            const _0x40fe8e = await doLottery(_0x2d9dc7.liveId, _0x2d9dc7.activeCode, _0x1912d6.xbkToken, _0x1912d6.phone, _0x1912d6.uid);
            _0xcc38d9 = 3;
            _0x40fe8e && _0x40fe8e.success && (!pushArr[_0x1912d6.uid] && (pushArr[_0x1912d6.uid] = {}), pushArr[_0x1912d6.uid][_0x1912d6.phone] = "<div>手机号: " + maskPhoneNumber(_0x1912d6.phone) + ">\";der :roloc\"=elyts naps<:得获 ,功成奖抽,".split("").reverse().join("") + _0x40fe8e.prize + "</span></div>");
            await sleep(4000);
          }
        } else {
          !_0x1912d6.xbkToken ? console.log("⚠️ 账号" + maskPhoneNumber(_0x1912d6.phone) + "未获取到token，跳过抽奖") : !_0x1912d6.isDo && console.log("⚠️ 账号" + maskPhoneNumber(_0x1912d6.phone) + "已达抽奖上限，跳过");
        }
      }
    }
    console.log("🎯 所有抽奖活动处理完毕，准备推送结果");
    for (let _0xa1ff14 in pushArr) {
      let _0x2837e2 = "";
      var _0x4d9ff2;
      let _0x2a9fb9 = 0;
      _0x4d9ff2 = 0;
      for (let _0x4fdee8 in pushArr[_0xa1ff14]) {
        _0x2837e2 += pushArr[_0xa1ff14][_0x4fdee8];
        var _0x4dd0b8 = 10;
        let _0x1add21 = extractNumbersWithDecimalsAndNegatives(pushArr[_0xa1ff14][_0x4fdee8]);
        _0x4dd0b8 = 2;
        _0x2a9fb9 += _0x1add21[_0x1add21.length - 1] || 0;
      }
      _0x2a9fb9 > 0 && (_0x2837e2 += _0x2a9fb9 + "元话费", sendTxt[_0xa1ff14] = _0x2837e2, console.log("📝 准备推送的中奖结果：" + _0x2837e2.substring(0, 50) + "..."));
    }
    pushArr = {};
    isStart = false;
    console.log("🎯 所有抽奖活动处理完成");
  } catch (_0x823b77) {
    console.error("：误错重严程流奖抽 ❌".split("").reverse().join("") + _0x823b77.message);
    isStart = false;
    setTimeout(() => {
      _0x29c2df && _0x29c2df.length > 0 && processAllLotteries(_0x29c2df, _0xa319c4);
    }, 60000);
  }
}
async function getLiveListByPhone(_0x33b3ea, _0x21b3dd, _0x344ae7) {
  console.log("📱 开始获取直播间列表（手机号：" + maskPhoneNumber(_0x33b3ea) + "）");
  try {
    var _0x5ea107 = 9;
    let _0x532aa8 = await loginPhone(_0x33b3ea, _0x21b3dd, _0x344ae7);
    _0x5ea107 = 3;
    if (!_0x532aa8) {
      console.log("：号机手（间播直取获法无，败失录登 ❌".split("").reverse().join("") + maskPhoneNumber(_0x33b3ea) + "）");
      initLiveList("init");
      return;
    }
    var _0x47a23a = 16;
    let _0x3d6b3a = await getUserCode(_0x532aa8.uid);
    _0x47a23a = 10;
    let _0x21ce87 = await getAccessToken(_0x3d6b3a);
    console.log("：号机手（据数间播直化始初始开，功成录登 ✅".split("").reverse().join("") + maskPhoneNumber(_0x33b3ea) + "）");
    await initLiveRoomFloor(1, 1, 1, _0x21ce87);
  } catch (_0x30ef03) {
    console.error("❌ 获取直播间列表错误：" + _0x30ef03.message + "（手机号：" + maskPhoneNumber(_0x33b3ea) + "）");
  }
}
async function initLiveList(_0x7203a, _0xf6f0dd) {
  console.log("：型类（据数间播直取获始开 ��".split("").reverse().join("") + _0x7203a + "）");
  try {
    if (_0x7203a == "tini".split("").reverse().join("")) {
      console.log("🏠 初始化直播间数据：使用随机账号");
      var _0x134f7b;
      let _0x580eef = Math.floor(Math.random() * _0xf6f0dd.length);
      _0x134f7b = 9;
      let _0x300db5 = _0xf6f0dd[_0x580eef];
      await getLiveListByPhone(_0x300db5.phone, _0x300db5.password, _0x300db5.loginObj);
    } else {
      let _0x1b4de4 = Math.floor(Math.random() * _0xf6f0dd.length);
      let _0x45ca16 = _0xf6f0dd[_0x1b4de4];
      _0x45ca16.xbkToken ? (console.log("：号机手（间播直新更nekot有已用使 ��".split("").reverse().join("") + maskPhoneNumber(_0x45ca16.phone) + "）"), await initLiveRoomFloor(1, 1, 1, _0x45ca16.xbkToken)) : (console.log("🏠 账号token不存在，重新初始化"), initLiveList("init", _0xf6f0dd));
    }
  } catch (_0x1a49f3) {
    console.error("：误错间播直取获 ❌".split("").reverse().join("") + _0x1a49f3.message);
  }
}
async function checkLotteryActivities(_0x4759c9) {
  console.log("⏰ 触发检查可抽奖活动（每10秒一次）");
  try {
    if (isStart) {
      console.log("查检次本过跳，中行进在正程流奖抽 ⏰".split("").reverse().join(""));
      return;
    }
    if (_0x4759c9.length === 0) {
      console.log("❌ 没有可用账号，无法检查抽奖活动");
      return;
    }
    var _0x4d7170;
    let _0x51065b = Math.floor(Math.random() * _0x4759c9.length);
    _0x4d7170 = 1;
    let _0x340ede = _0x4759c9[_0x51065b];
    _0x340ede.xbkToken ? (console.log("🔍 使用账号" + maskPhoneNumber(_0x340ede.phone) + "动活奖抽可查检".split("").reverse().join("")), await checkAvailableLotteries(_0x340ede.xbkToken)) : (console.log("⚠️ 账号" + maskPhoneNumber(_0x340ede.phone) + "未登录，尝试重新登录"), await loginAllAccounts(_0x4759c9), checkLotteryActivities(_0x4759c9));
  } catch (_0x11f340) {
    console.error("：误错动活奖抽查检 ❌".split("").reverse().join("") + _0x11f340.message);
    setTimeout(() => checkLotteryActivities(_0x4759c9), 5000);
  }
}
async function loginAllAccounts(_0x2502bd, _0x113895) {
  console.log("🔐 开始检查所有账号状态（共" + _0x2502bd.length + "个）");
  try {
    let _0x3e5252 = _0x2502bd.map(async (_0x8b580d, _0x30e5ed) => {
      try {
        if (!_0x8b580d.time) {
          console.log("🔐 账号" + maskPhoneNumber(_0x8b580d.phone) + "：首次登录");
          let _0x117b97 = await loginPhoneWithCache(_0x8b580d.phone, _0x8b580d.password, _0x113895);
          _0x2502bd[_0x30e5ed].time = new Date().valueOf();
          if (!_0x117b97) {
            console.log("号账 ❌".split("").reverse().join("") + maskPhoneNumber(_0x8b580d.phone) + "登录失败");
            _0x2502bd[_0x30e5ed].isLogin = false;
            return;
          }
          var _0x3ac40e = 17;
          let _0x2af1b5 = await getUserCode(_0x117b97.uid);
          _0x3ac40e = 2;
          let _0x49f549 = await getAccessToken(_0x2af1b5);
          _0x2502bd[_0x30e5ed].xbkToken = _0x49f549;
          _0x2502bd[_0x30e5ed].isDo = await getMyWinList(_0x49f549);
          _0x2502bd[_0x30e5ed].isLogin = true;
          console.log("号账 ✅".split("").reverse().join("") + maskPhoneNumber(_0x8b580d.phone) + "登录成功");
          !isGetLive && liveListAll.length == 0 && (isGetLive = true, console.log("号账用使 ��".split("").reverse().join("") + maskPhoneNumber(_0x8b580d.phone) + "初始化直播间数据"), await initLiveRoomFloor(1, 1, 1, _0x49f549));
        } else {
          if (_0x8b580d.time && new Date().valueOf() - _0x8b580d.time > 43200000) {
            console.log("🔐 账号" + maskPhoneNumber(_0x8b580d.phone) + "：token过期（>12小时），重新登录");
            let _0x3c46cd = await loginPhoneWithCache(_0x8b580d.phone, _0x8b580d.password, _0x113895);
            _0x2502bd[_0x30e5ed].time = new Date().valueOf();
            if (!_0x3c46cd) {
              console.log("号账 ❌".split("").reverse().join("") + maskPhoneNumber(_0x8b580d.phone) + "败失录登新重".split("").reverse().join(""));
              _0x2502bd[_0x30e5ed].isLogin = false;
              return;
            }
            var _0x450648;
            let _0xd21921 = await getUserCode(_0x3c46cd.uid);
            _0x450648 = 9;
            let _0x2aa8e7 = await getAccessToken(_0xd21921);
            _0x2502bd[_0x30e5ed].xbkToken = _0x2aa8e7;
            _0x2502bd[_0x30e5ed].isDo = await getMyWinList(_0x2aa8e7);
            _0x2502bd[_0x30e5ed].isLogin = true;
            console.log("号账 ✅".split("").reverse().join("") + maskPhoneNumber(_0x8b580d.phone) + "功成录登新重".split("").reverse().join(""));
          } else {
            if (_0x8b580d.time && new Date().valueOf() - _0x8b580d.time > 21600000 && !_0x8b580d.isLogin) {
              console.log("号账 ��".split("").reverse().join("") + maskPhoneNumber(_0x8b580d.phone) + "：未登录（>6小时），尝试登录");
              var _0xfff2e6 = 17;
              let _0x3fdcc9 = await loginPhoneWithCache(_0x8b580d.phone, _0x8b580d.password, _0x113895);
              _0xfff2e6 = "neooeq".split("").reverse().join("");
              _0x2502bd[_0x30e5ed].time = new Date().valueOf();
              if (!_0x3fdcc9) {
                console.log("号账 ❌".split("").reverse().join("") + maskPhoneNumber(_0x8b580d.phone) + "败失录登".split("").reverse().join(""));
                _0x2502bd[_0x30e5ed].isLogin = false;
                return;
              }
              var _0x1aa588 = 8;
              let _0x408a9c = await getUserCode(_0x3fdcc9.uid);
              _0x1aa588 = "ifbcpb";
              var _0x41772b = 7;
              let _0x56e32c = await getAccessToken(_0x408a9c);
              _0x41772b = 4;
              _0x2502bd[_0x30e5ed].xbkToken = _0x56e32c;
              _0x2502bd[_0x30e5ed].isDo = await getMyWinList(_0x56e32c);
              _0x2502bd[_0x30e5ed].isLogin = true;
              console.log("号账 ✅".split("").reverse().join("") + maskPhoneNumber(_0x8b580d.phone) + "登录成功");
            } else {
              console.log("ℹ️ 账号" + maskPhoneNumber(_0x8b580d.phone) + "状态正常（无需重新登录）");
            }
          }
        }
      } catch (_0x2a7b21) {
        console.error("❌ 处理账号" + maskPhoneNumber(_0x8b580d.phone) + "：误错".split("").reverse().join("") + _0x2a7b21.message);
      }
    });
    await Promise.all(_0x3e5252);
    var _0x40bd27;
    const _0x11f33a = _0x2502bd.filter(_0x256651 => _0x256651.isLogin && _0x256651.xbkToken);
    _0x40bd27 = "jodkbc".split("").reverse().join("");
    console.log("🔐 所有账号检查完毕，活跃账号数量：" + _0x11f33a.length + "/" + _0x2502bd.length);
    return _0x11f33a.length > 0;
  } catch (_0x2103c7) {
    console.error("：误错录登量批 ❌".split("").reverse().join("") + _0x2103c7.message);
    return false;
  }
}
async function initializeUserData(_0x540906) {
  console.log("📋 开始初始化用户数据");
  try {
    let _0x4b5a9d = {};
    try {
      _0x4b5a9d = JSON.parse(fs.readFileSync("./Cache.json", "utf8"));
      console.log("📋 成功加载缓存数据");
    } catch (_0xbb4d5e) {
      console.log("📋 缓存文件不存在，创建新缓存");
      fs.writeFileSync("./Cache.json", JSON.stringify({}), "8ftu".split("").reverse().join(""));
      _0x4b5a9d = {};
    }
    console.log("📋 共获取到" + _0x540906.length + "个账号");
    await loginAllAccounts(_0x540906, _0x4b5a9d);
    if (liveListAll.length === 0 && !isGetLive) {
      console.log("🏠 本地无直播间数据，开始初始化");
      var _0x5b6875 = 4;
      const _0x54880d = _0x540906.find(_0x4856aa => _0x4856aa.xbkToken);
      _0x5b6875 = 4;
      _0x54880d ? await initLiveRoomFloor(1, 1, 1, _0x54880d.xbkToken) : console.log("❌ 没有可用的已登录账号，无法初始化直播间");
    }
  } catch (_0x4b7cfe) {
    console.error("❌ 初始化用户数据错误：" + _0x4b7cfe.message);
    setTimeout(() => initializeUserData(_0x540906), 300000);
  }
}
function getTimestamp() {
  return getTimestampFormatted();
}
var _0xb8gbd = 10;
const originalLog = console.log;
_0xb8gbd = 0;
console.log = function (..._0x1c95e4) {
  const _0x182f35 = getTimestamp();
  originalLog("[" + _0x182f35 + "]", ..._0x1c95e4);
};
let userPhone = [];
process?.["env"]?.["chinaTelecomAccount"] ? process?.["env"]?.["chinaTelecomAccount"]["split"]("&")["map"](_0xba94bd => {
  if (_0xba94bd) {
    let _0xe461e2 = _0xba94bd.split("#")[0];
    var _0x3f8bcb = 4;
    let _0xbb587e = _0xba94bd.split("#")[1];
    _0x3f8bcb = "pnmjic";
    const _0x4cfad9 = {
      phone: _0xe461e2,
      password: _0xbb587e
    };
    userPhone.push(_0x4cfad9);
  }
}) : (console.log("tnuoccAmoceleTanihc量变境环置设请，量变境环到找未 ❌".split("").reverse().join("")), process.exit());
var _0x6d_0xa8e;
let userName = "";
_0x6d_0xa8e = 6;
process?.["env"]?.["dxUserName1"] || "aaabbb" ? userName = process?.["env"]?.["dxUserName1"] || "aaabbb" : process.exit();
(async () => {
  console.log("...化始初始开，动启本脚 ��".split("").reverse().join(""));
  if (!validateDate()) {
    process.exit(1);
    return;
  }
  if (!(await validateLkey())) {
    process.exit(1);
    return;
  }
  try {
    await initializeUserData(userPhone);
    var _0x4af236;
    let _0x45f615 = [];
    _0x4af236 = 7;
    try {
      _0x45f615 = JSON.parse(fs.readFileSync("nosj.tsiLevil/.".split("").reverse().join(""), "8ftu".split("").reverse().join("")));
      console.log("💾 读取本地直播间数据成功（" + _0x45f615.length + "个）");
      setLiveListAll(_0x45f615);
    } catch (_0x3fdb2d) {
      console.log("💾 本地直播间数据不存在，将重新获取");
      fs.writeFileSync("./liveList.json", JSON.stringify([]), "8ftu".split("").reverse().join(""));
      _0x45f615 = [];
    }
    if (_0x45f615.length === 0) {
      console.log("🏠 本地直播间数据为空，开始初始化加载（仅加载省份1）");
      var _0x325e36 = 14;
      const _0x1f9ef4 = userPhone.find(_0x3e7ebc => _0x3e7ebc.xbkToken);
      _0x325e36 = 4;
      _0x1f9ef4 && (await initLiveRoomFloor(1, 1, 1, _0x1f9ef4.xbkToken));
    } else {
      console.log("🏠 本地直播间数据有效");
      const _0x53fd0c = fs.statSync("nosj.tsiLevil/.".split("").reverse().join(""));
      var _0x5bca72;
      const _0x3c0262 = new Date(_0x53fd0c.mtime);
      _0x5bca72 = 1;
      const _0x26523a = new Date();
      const _0xe409d0 = (_0x26523a - _0x3c0262) / 3600000;
      if (_0xe409d0 > 2) {
        console.log("已前当（取获新重要需，时小2过超已据数间播直 ⏰".split("").reverse().join("") + Math.floor(_0xe409d0) + "）时小".split("").reverse().join(""));
        var _0x4a7c98;
        const _0x587c84 = userPhone.find(_0x127751 => _0x127751.xbkToken);
        _0x4a7c98 = "fblach";
        _0x587c84 && (await initLiveRoomFloor(1, 1, 1, _0x587c84.xbkToken));
      } else {
        console.log("⏰ 直播间数据较新（" + Math.floor(_0xe409d0) + "存缓用使，）前时小".split("").reverse().join(""));
        setTimeout(() => checkLotteryActivities(userPhone), 2000);
      }
    }
  } catch (_0x46b375) {
    console.error("：误错重严化始初本脚 ❌".split("").reverse().join("") + _0x46b375.message);
    console.log("化始初试重将后钟分1 ⏰".split("").reverse().join(""));
    setTimeout(() => process.exit(1), 60000);
  }
})();
setInterval(async () => {
  console.log("⏰ 定时任务：每小时更新直播间和账号列表（触发）");
  await initializeUserData(userPhone);
  initLiveList("etadpu".split("").reverse().join(""), userPhone);
}, 3600000);
setInterval(() => {
  console.log("）发触将即（动活奖抽可查检秒01每：务任时定 ⏰".split("").reverse().join(""));
  !isStart ? checkLotteryActivities(userPhone) : console.log("⏰ 抽奖流程进行中，跳过本次定时检查");
}, 300000);
setInterval(() => {
  console.log("⏰ 定时任务：每10分钟清空抽奖记录（触发）");
  while (runGameId.length > 0) {
    runGameId.pop();
  }
  console.log("✅ 抽奖记录已清空");
}, 600000);
setInterval(async () => {
  console.log("⏰ 定时任务：每分钟检查推送消息（触发）");
  if (!isStart) {
    var _0x8810ac = 7;
    let _0x1210ea = Object.keys(sendTxt);
    _0x8810ac = "ekojap";
    if (_0x1210ea.length > 0) {
      console.log("📤 发现" + _0x1210ea.length + "条待推送消息");
      for (let _0x1c0ec8 in sendTxt) {
        await sendMsg(sendTxt[_0x1c0ec8], _0x1c0ec8);
        await sleep(3000);
      }
      for (let _0x457ba7 in sendTxt) {
        delete sendTxt[_0x457ba7];
      }
      console.log("成完送推息消有所 ��".split("").reverse().join(""));
    } else {
      console.log("📤 没有待推送的消息");
    }
  } else {
    console.log("息消送推不暂，中行进程流奖抽 ⏰".split("").reverse().join(""));
  }
}, 60000);