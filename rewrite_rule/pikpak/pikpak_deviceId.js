/**************************************

#!name = PikPak工具
#!desc = 随机设备码和IP
#!author = AAA、小白
#!date = 2024-09-22

[Script]
# PIKPAK-圈X
^https?:\/\/.*\.mypikpak\.com\/.* url script-request-header https://raw.githubusercontent.com/LiJunYi2/QuantumultX/refs/heads/main/rewrite_rule/pikpak/pikpak_deviceId.js

# PIKPAK-LOON
http-request ^https?:\/\/.*\.mypikpak\.com\/.* requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/LiJunYi2/QuantumultX/refs/heads/main/rewrite_rule/pikpak/pikpak_deviceId.js, tag=PIKPAK随机设备

[Mitm]
hostname = *.mypikpak.com
**************************************/

const $ = new Env("pikpak");
let devicedId = $.getItem('devicedId');
let ip = $.getItem('ip');

if (!devicedId || !ip) {
    devicedId = generateUUID().replace(/-/g, '');
    ip = getChangeIp();
    $.setItem('devicedId', devicedId);
    $.setItem('ip', ip);
    $.log("PikPak工具--> 首次执行，生成随机设备码和IP。");
} else {
    $.log("PikPak工具--> 使用已存储的设备码和IP。");
}


if ($request.url.indexOf("/order/activation-code") !== -1){
    const Headers = $request.headers || {};
    Headers['x-device-sign'] = `wdi10.${devicedId}xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`;
    Headers['x-device-id'] = devicedId;
    Headers['x-forwarded-for'] = ip;
    Headers['x-guid'] = devicedId;
    $.log(`随机设备码:${devicedId},随机IP:${ip}`);
    // 更新新的
    devicedId = generateUUID().replace(/-/g, '');
    ip = getChangeIp();
    $.setItem('devicedId', devicedId);
    $.setItem('ip', ip);
    $.log("PikPak工具--> 邀请完成，重新生成并保存随机设备码和IP。");
    $.log("随机设备码:", devicedId);
    $.log("随机IP:", ip);
    $.done({ headers: Headers });
} else if ($request.url.includes(".js") || $request.url.includes(".css")){
    $done();
} else {
    const Headers = $request.headers || {};
    Headers['x-device-id'] = devicedId;
    Headers['x-forwarded-for'] = ip;
    Headers['x-guid'] = devicedId;
    $.log(`随机设备码:${devicedId},随机IP:${ip}`);
    $.done({ headers: Headers });
}


/***************** 工具函数 *****************/
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


function getChangeIp() {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');
}

/***************** Env *****************/
function Env(a,b){var c=Math.floor;return new class{constructor(a,b){this.name=a,this.version="1.7.4",this.data=null,this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=new Date().getTime(),Object.assign(this,b),this.log("",`🔔${this.name}, 开始!`)}platform(){return"undefined"!=typeof $environment&&$environment["surge-version"]?"Surge":"undefined"!=typeof $environment&&$environment["stash-version"]?"Stash":"undefined"==typeof module||!module.exports?"undefined"==typeof $task?"undefined"==typeof $loon?"undefined"==typeof $rocket?"undefined"==typeof Egern?void 0:"Egern":"Shadowrocket":"Loon":"Quantumult X":"Node.js"}isQuanX(){return"Quantumult X"===this.platform()}isSurge(){return"Surge"===this.platform()}isLoon(){return"Loon"===this.platform()}isShadowrocket(){return"Shadowrocket"===this.platform()}isStash(){return"Stash"===this.platform()}isEgern(){return"Egern"===this.platform()}toObj(a,b=null){try{return JSON.parse(a)}catch{return b}}toStr(a,b=null){try{return JSON.stringify(a)}catch{return b}}lodash_get(a={},b="",c=void 0){Array.isArray(b)||(b=this.toPath(b));const d=b.reduce((a,b)=>Object(a)[b],a);return d===void 0?c:d}lodash_set(a={},b="",c){return Array.isArray(b)||(b=this.toPath(b)),b.slice(0,-1).reduce((a,c,d)=>Object(a[c])===a[c]?a[c]:a[c]=/^\d+$/.test(b[d+1])?[]:{},a)[b[b.length-1]]=c,a}toPath(a){return a.replace(/\[(\d+)\]/g,".$1").split(".").filter(Boolean)}getItem(a=new String,b=null){let c=b;switch(a.startsWith("@")){case!0:const{key:b,path:d}=a.match(/^@(?<key>[^.]+)(?:\.(?<path>.*))?$/)?.groups;a=b;let e=this.getItem(a,{});"object"!=typeof e&&(e={}),c=this.lodash_get(e,d);try{c=JSON.parse(c)}catch(a){}break;default:switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":c=$persistentStore.read(a);break;case"Quantumult X":c=$prefs.valueForKey(a);break;default:c=this.data?.[a]||null}try{c=JSON.parse(c)}catch(a){}}return c??b}setItem(a=new String,b=new String){let c=!1;switch(typeof b){case"object":b=JSON.stringify(b);break;default:b=b+""}switch(a.startsWith("@")){case!0:const{key:d,path:e}=a.match(/^@(?<key>[^.]+)(?:\.(?<path>.*))?$/)?.groups;a=d;let f=this.getItem(a,{});"object"!=typeof f&&(f={}),this.lodash_set(f,e,b),c=this.setItem(a,f);break;default:switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":c=$persistentStore.write(b,a);break;case"Quantumult X":c=$prefs.setValueForKey(b,a);break;default:c=this.data?.[a]||null}}return c}async fetch(a={},b={}){switch(a.constructor){case Object:a={...a,...b};break;case String:a={url:a,...b}}a.method||(a.method=a.body??a.bodyBytes?"POST":"GET"),delete a.headers?.Host,delete a.headers?.[":authority"],delete a.headers?.["Content-Length"],delete a.headers?.["content-length"];const c=a.method.toLocaleLowerCase();switch(this.platform()){case"Loon":case"Surge":case"Stash":case"Egern":case"Shadowrocket":default:return a.policy&&(this.isLoon()&&(a.node=a.policy),this.isStash()&&this.lodash_set(a,"headers.X-Stash-Selected-Proxy",encodeURI(a.policy))),a.followRedirect&&((this.isSurge()||this.isLoon())&&(a["auto-redirect"]=!1),this.isQuanX()&&(a.opts?a.opts.redirection=!1:a.opts={redirection:!1})),a.bodyBytes&&!a.body&&(a.body=a.bodyBytes,delete a.bodyBytes),await new Promise((b,d)=>{$httpClient[c](a,(c,e,f)=>{c?d(c):(e.ok=/^2\d\d$/.test(e.status),e.statusCode=e.status,f&&(e.body=f,!0==a["binary-mode"]&&(e.bodyBytes=f)),b(e))})});case"Quantumult X":return a.policy&&this.lodash_set(a,"opts.policy",a.policy),"boolean"==typeof a["auto-redirect"]&&this.lodash_set(a,"opts.redirection",a["auto-redirect"]),a.body instanceof ArrayBuffer?(a.bodyBytes=a.body,delete a.body):ArrayBuffer.isView(a.body)?(a.bodyBytes=a.body.buffer.slice(a.body.byteOffset,a.body.byteLength+a.body.byteOffset),delete object.body):a.body&&delete a.bodyBytes,await $task.fetch(a).then(a=>(a.ok=/^2\d\d$/.test(a.statusCode),a.status=a.statusCode,a),a=>Promise.reject(a.error))}}time(a,b=null){const d=b?new Date(b):new Date;let e={"M+":d.getMonth()+1,"d+":d.getDate(),"H+":d.getHours(),"m+":d.getMinutes(),"s+":d.getSeconds(),"q+":c((d.getMonth()+3)/3),S:d.getMilliseconds()};for(let c in /(y+)/.test(a)&&(a=a.replace(RegExp.$1,(d.getFullYear()+"").slice(4-RegExp.$1.length))),e)new RegExp("("+c+")").test(a)&&(a=a.replace(RegExp.$1,1==RegExp.$1.length?e[c]:("00"+e[c]).slice((""+e[c]).length)));return a}getBaseURL(a){return a.replace(/[?#].*$/,"")}isAbsoluteURL(a){return /^[a-z][a-z0-9+.-]*:/.test(a)}getURLParameters(a){return(a.match(/([^?=&]+)(=([^&]*))/g)||[]).reduce((b,a)=>(b[a.slice(0,a.indexOf("="))]=a.slice(a.indexOf("=")+1),b),{})}getTimestamp(a=new Date){return c(a.getTime()/1e3)}queryStr(a){let b=[];for(let c in a)a.hasOwnProperty(c)&&b.push(`${c}=${a[c]}`);let c=b.join("&");return c}queryObj(a){let b={},c=a.split("&");for(let d of c){let a=d.split("="),c=a[0],e=a[1]||"";c&&(b[c]=e)}return b}msg(a=this.name,b="",c="",d){const e=a=>{switch(typeof a){case void 0:return a;case"string":switch(this.platform()){case"Surge":case"Stash":case"Egern":default:return{url:a};case"Loon":case"Shadowrocket":return a;case"Quantumult X":return{"open-url":a}}case"object":switch(this.platform()){case"Surge":case"Stash":case"Egern":case"Shadowrocket":default:{let b=a.url||a.openUrl||a["open-url"];return{url:b}}case"Loon":{let b=a.openUrl||a.url||a["open-url"],c=a.mediaUrl||a["media-url"];return{openUrl:b,mediaUrl:c}}case"Quantumult X":{let b=a["open-url"]||a.url||a.openUrl,c=a["media-url"]||a.mediaUrl,d=a["update-pasteboard"]||a.updatePasteboard;return{"open-url":b,"media-url":c,"update-pasteboard":d}}}default:}};if(!this.isMute)switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Shadowrocket":default:$notification.post(a,b,c,e(d));break;case"Quantumult X":$notify(a,b,c,e(d))}}log(...a){0<a.length&&(this.logs=[...this.logs,...a]),console.log(a.join(this.logSeparator))}logErr(a,b){switch(this.platform()){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Quantumult X":default:this.log("",`❗️${this.name}, 错误!`,a,b)}}wait(a){return new Promise(b=>setTimeout(b,a))}done(a={}){const b=new Date().getTime(),c=(b-this.startTime)/1e3;switch(this.log("",`🔔${this.name}, 结束! 🕛 ${c} 秒`),this.platform()){case"Surge":a.policy&&this.lodash_set(a,"headers.X-Surge-Policy",a.policy),$done(a);break;case"Loon":a.policy&&(a.node=a.policy),$done(a);break;case"Stash":a.policy&&this.lodash_set(a,"headers.X-Stash-Selected-Proxy",encodeURI(a.policy)),$done(a);break;case"Egern":$done(a);break;case"Shadowrocket":default:$done(a);break;case"Quantumult X":a.policy&&this.lodash_set(a,"opts.policy",a.policy),delete a["auto-redirect"],delete a["auto-cookie"],delete a["binary-mode"],delete a.charset,delete a.host,delete a.insecure,delete a.method,delete a.opt,delete a.path,delete a.policy,delete a["policy-descriptor"],delete a.scheme,delete a.sessionIndex,delete a.statusCode,delete a.timeout,a.body instanceof ArrayBuffer?(a.bodyBytes=a.body,delete a.body):ArrayBuffer.isView(a.body)?(a.bodyBytes=a.body.buffer.slice(a.body.byteOffset,a.body.byteLength+a.body.byteOffset),delete a.body):a.body&&delete a.bodyBytes,$done(a)}}}(a,b)}
