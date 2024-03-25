let body = JSON.parse($response.body);
/**
 * @url: https://api-pro.mumu.163.com/api/v1/user/info
 * @body: json
    {
    "code": 0,
    "msg": "ok",
    "data": {
        "user_id": "aebglmpozaaaabua",
        "nickname": "fhk",
        "member_expired_at": 0,
        "member_status": 0,
        "enabled_device_count": 1,
        "current_device_status": 1,
        "current_device": {
        "device_id": "aeawlmporaaaabvm",
        "alias": "fhk的MacBook Pro",
        "last_binded_at": 1710418935,
        "trial_end_at": 1707839999,
        "trial_status": 2
        }
    }
    } 
*/
// body?.data?.member_expired_at=7;
// body?.data?.member_status=1;
// body?.data?.current_devic?.trial_end_at=17078399990;
// body?.data?.current_devic?.trial_status=1;
body = JSON.stringify({
    "code": 0,
    "msg": "ok",
    "data": {
        "user_id": "aebglmpozaaaabua",
        "nickname": "fhk",
        "member_expired_at": 7,
        "member_status": 1,
        "enabled_device_count": 1,
        "current_device_status": 1,
        "current_device": {
            "device_id": "aeawlmporaaaabvm",
            "alias": "fhk的MacBook Pro",
            "last_binded_at": 1710418935,
            "trial_end_at": 17078399990,
            "trial_status": 1
        }
    }
})
$done({ body });
