/*
脚本功能：FileBall解锁高级版
[rewrite_local]
# > FileBox解锁永久高级版
^https?:\/\/api\.revenuecat\.com\/v1\/((receipts)|(subscribers))\/\$RCAnonymousID%3A\w{32}$ url script-response-body https://raw.githubusercontent.com/paynexss/Scripts/main/Scripts/FBreceipts.js
[mitm]
hostname = api.revenuecat.com
*/


var objc = JSON.parse($response.body);

objc =
    {
        "request_date": "2023-03-10T09:45:54Z",
        "request_date_ms": 1678441554356,
        "subscriber": {
            "entitlements": {
                "filebox_pro": {
                    "expires_date": null,
                    "grace_period_expires_date": null,
                    "product_identifier": "filebox_pro",
                    "purchase_date": "2023-02-27T10:13:17Z"
                }
            },
            "first_seen": "2023-02-15T04:39:11Z",
            "last_seen": "2023-03-09T15:15:53Z",
            "management_url": null,
            "non_subscriptions": {
                "filebox_pro": [
                    {
                        "id": "36c347f1c5",
                        "is_sandbox": false,
                        "original_purchase_date": "2022-02-09T18:18:19Z",
                        "purchase_date": "2022-02-09T18:18:19Z",
                        "store": "app_store"
                    },
                    {
                        "id": "a234bf9f03",
                        "is_sandbox": false,
                        "original_purchase_date": "2022-02-21T15:42:35Z",
                        "purchase_date": "2022-02-21T15:42:35Z",
                        "store": "app_store"
                    },
                    {
                        "id": "a27c035151",
                        "is_sandbox": false,
                        "original_purchase_date": "2022-04-04T02:29:26Z",
                        "purchase_date": "2022-04-04T02:29:26Z",
                        "store": "app_store"
                    },
                    {
                        "id": "ec1d68a492",
                        "is_sandbox": false,
                        "original_purchase_date": "2022-05-02T13:21:34Z",
                        "purchase_date": "2022-05-02T13:21:34Z",
                        "store": "app_store"
                    },
                    {
                        "id": "08a64bc33a",
                        "is_sandbox": false,
                        "original_purchase_date": "2022-06-10T14:46:44Z",
                        "purchase_date": "2022-06-10T14:46:44Z",
                        "store": "app_store"
                    },
                    {
                        "id": "61f0c80a66",
                        "is_sandbox": false,
                        "original_purchase_date": "2022-06-22T13:48:38Z",
                        "purchase_date": "2022-06-22T13:48:38Z",
                        "store": "app_store"
                    },
                    {
                        "id": "66ab881a36",
                        "is_sandbox": false,
                        "original_purchase_date": "2022-08-12T05:05:57Z",
                        "purchase_date": "2022-08-12T05:05:57Z",
                        "store": "app_store"
                    },
                    {
                        "id": "4dd0b5b88e",
                        "is_sandbox": false,
                        "original_purchase_date": "2022-11-05T14:52:48Z",
                        "purchase_date": "2022-11-05T14:52:48Z",
                        "store": "app_store"
                    },
                    {
                        "id": "4f05e59d37",
                        "is_sandbox": false,
                        "original_purchase_date": "2022-11-13T09:19:20Z",
                        "purchase_date": "2022-11-13T09:19:20Z",
                        "store": "app_store"
                    },
                    {
                        "id": "5957b9cb85",
                        "is_sandbox": false,
                        "original_purchase_date": "2023-01-01T01:51:00Z",
                        "purchase_date": "2023-01-01T01:51:00Z",
                        "store": "app_store"
                    },
                    {
                        "id": "e90481b955",
                        "is_sandbox": false,
                        "original_purchase_date": "2023-01-09T06:22:24Z",
                        "purchase_date": "2023-01-09T06:22:24Z",
                        "store": "app_store"
                    },
                    {
                        "id": "0a9fb37655",
                        "is_sandbox": false,
                        "original_purchase_date": "2023-01-13T19:14:15Z",
                        "purchase_date": "2023-01-13T19:14:15Z",
                        "store": "app_store"
                    },
                    {
                        "id": "276f133e47",
                        "is_sandbox": false,
                        "original_purchase_date": "2023-01-17T04:40:21Z",
                        "purchase_date": "2023-01-17T04:40:21Z",
                        "store": "app_store"
                    },
                    {
                        "id": "8c3359caac",
                        "is_sandbox": false,
                        "original_purchase_date": "2023-01-17T05:13:31Z",
                        "purchase_date": "2023-01-17T05:13:31Z",
                        "store": "app_store"
                    },
                    {
                        "id": "3070b4abd6",
                        "is_sandbox": false,
                        "original_purchase_date": "2023-01-17T05:58:03Z",
                        "purchase_date": "2023-01-17T05:58:03Z",
                        "store": "app_store"
                    },
                    {
                        "id": "2469641acd",
                        "is_sandbox": false,
                        "original_purchase_date": "2023-01-21T01:22:44Z",
                        "purchase_date": "2023-01-21T01:22:44Z",
                        "store": "app_store"
                    },
                    {
                        "id": "a22c9de205",
                        "is_sandbox": false,
                        "original_purchase_date": "2023-01-21T03:02:55Z",
                        "purchase_date": "2023-01-21T03:02:55Z",
                        "store": "app_store"
                    },
                    {
                        "id": "9ad90624c0",
                        "is_sandbox": false,
                        "original_purchase_date": "2023-01-21T09:30:26Z",
                        "purchase_date": "2023-01-21T09:30:26Z",
                        "store": "app_store"
                    },
                    {
                        "id": "18bb93f63a",
                        "is_sandbox": false,
                        "original_purchase_date": "2023-01-21T17:46:37Z",
                        "purchase_date": "2023-01-21T17:46:37Z",
                        "store": "app_store"
                    },
                    {
                        "id": "347e6e424a",
                        "is_sandbox": false,
                        "original_purchase_date": "2023-01-24T08:23:42Z",
                        "purchase_date": "2023-01-24T08:23:42Z",
                        "store": "app_store"
                    },
                    {
                        "id": "e6f2c4324a",
                        "is_sandbox": false,
                        "original_purchase_date": "2023-01-31T09:12:57Z",
                        "purchase_date": "2023-01-31T09:12:57Z",
                        "store": "app_store"
                    },
                    {
                        "id": "d692c80d1f",
                        "is_sandbox": false,
                        "original_purchase_date": "2023-02-06T02:06:14Z",
                        "purchase_date": "2023-02-06T02:06:14Z",
                        "store": "app_store"
                    },
                    {
                        "id": "681d4ca605",
                        "is_sandbox": false,
                        "original_purchase_date": "2023-02-17T16:31:31Z",
                        "purchase_date": "2023-02-17T16:31:31Z",
                        "store": "app_store"
                    },
                    {
                        "id": "549f736070",
                        "is_sandbox": false,
                        "original_purchase_date": "2023-02-27T10:13:17Z",
                        "purchase_date": "2023-02-27T10:13:17Z",
                        "store": "app_store"
                    }
                ]
            },
            "original_app_user_id": "$RCAnonymousID:d90208341aee4fc5873ef1740056bd82",
            "original_application_version": "53",
            "original_purchase_date": "2021-09-29T16:05:27Z",
            "other_purchases": {
                "filebox_pro": {
                    "purchase_date": "2023-02-27T10:13:17Z"
                }
            },
            "subscriptions": {}
        }
    };

$done({body : JSON.stringify(objc)});
