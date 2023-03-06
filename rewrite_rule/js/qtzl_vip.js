/*

QX:
[rewrite_local]
#解锁会员
https?:\/\/wx-love-api\.afunapp\.com\/(proporty\/get_user_property|user\/get_user_info) url script-response-body https://raw.githubusercontent.com/KingBoyAndGirl/qx_rules/main/qtzl_vip.js


[mitm]
hostname = *.afunapp.com

*/

var body = $response.body;
var obj = JSON.parse(body);

obj.data.is_vip = true;
obj.data.vip_type = 3;
obj.data.unlock = true;
obj.data.check_delay = true;
obj.data.is_free_chat = true;
obj.data.check_delay = true;
obj.data.is_blocked = true;
obj.data.is_each_follow = true;
obj.data.moment_total = 1000;



body = JSON.stringify(obj);
$done(body);
