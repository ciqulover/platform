var users = {
    "a": {
        "password": "a",
        "qns": []
    },
    "ycwalker": {
        "password": "111",
        "qns": [
            "1469702124000",
            "1469717070527",
            "1469717318182"
        ]
    }
}
var qns = {
    "1469702124000": {
        "user": "ycwalker",
        "title": "This is a test example ",
        "start": "Thu Jul 21 2016",
        "end": "Fri Jul 22 2016",
        "state": "Finished",
        "qs": [
            {
                "qid": 0.22944087385174528,
                "necessary": true,
                "type": "radio",
                "describe": "the test example question 1",
                "choices": [
                    "this is test choice 1",
                    "this is test choice 2",
                    "this is test choice 3",
                    "this is test choice 4"
                ]
            },
            {
                "qid": 0.9065308030681309,
                "necessary": true,
                "type": "checkbox",
                "describe": "the test example question 2",
                "choices": [
                    "this is test choice 5",
                    "this is test choice 6",
                    "this is test choice 7",
                    "this is test choice 8"
                ]
            },
            {
                "qid": 0.03562824330532566,
                "necessary": true,
                "type": "text",
                "describe": "the test example question 3"
            },
            {
                "qid": 0.07512726379499135,
                "necessary": true,
                "type": "text",
                "describe": "the test example question 4"
            },
            {
                "qid": 0.766759542980328,
                "necessary": true,
                "type": "checkbox",
                "describe": "the test example question 5",
                "choices": [
                    "this is test choice 9",
                    "this is test choice 10",
                    "this is test choice 11",
                    "this is test choice 12"
                ]
            },
            {
                "qid": 0.6991707105788574,
                "necessary": true,
                "type": "radio",
                "describe": "the test example question 6",
                "choices": [
                    "this is test choice 13",
                    "this is test choice 14",
                    "this is test choice 15",
                    "this is test choice 16",
                    "this is test choice 17"
                ]
            }
        ]
    },
    "1469717070527": {
        "user": "ycwalker",
        "title": "The test Questionnaire 2",
        "start": "Thu Jul 28 2016",
        "end": "Tue Aug 02 2016",
        "state": "Released",
        "qs": [
            {
                "qid": 0.9517143523760936,
                "necessary": true,
                "type": "checkbox",
                "describe": "multiple choice question",
                "choices": [
                    "some choices 1",
                    "some choices 2",
                    "some choices 3",
                    "some choices 4"
                ]
            },
            {
                "qid": 0.9900809718608827,
                "necessary": true,
                "type": "radio",
                "describe": "single choice question",
                "choices": [
                    "some choices 5",
                    "some choices 6",
                    "some choices 7",
                    "some choices 8"
                ]
            },
            {
                "qid": 0.6031321874513489,
                "necessary": true,
                "type": "text",
                "describe": "text question"
            }
        ]
    },
    "1469717318182": {
        "user": "ycwalker",
        "title": "Test Questionnaire 3",
        "start": "",
        "end": "",
        "state": "Unreleased",
        "qs": [
            {
                "qid": 0.05655444452344338,
                "necessary": true,
                "type": "text",
                "describe": "some text question"
            },
            {
                "qid": 0.7864613367866908,
                "necessary": true,
                "type": "radio",
                "describe": "some single choice question",
                "choices": [
                    "random choice 1",
                    "random choice 2",
                    "random choice 3",
                    "random choice 4"
                ]
            },
            {
                "qid": 0.3113088402455835,
                "necessary": true,
                "type": "checkbox",
                "describe": "some mutiple choice question",
                "choices": [
                    "random choice 5",
                    "random choice 6",
                    "random choice 7",
                    "random choice 8"
                ]
            }
        ]
    }
}
var results = {
    "1469702124000": [
        [
            "this is test choice 2",
            [
                "this is test choice 6",
                "this is test choice 7"
            ],
            "aaa",
            "bbb",
            [
                "this is test choice 10",
                "this is test choice 11"
            ],
            "this is test choice 15"
        ],
        [
            "this is test choice 2",
            [
                "this is test choice 7",
                "this is test choice 8",
                "this is test choice 6"
            ],
            "ddd",
            "eee",
            [
                "this is test choice 10",
                "this is test choice 11"
            ],
            "this is test choice 15"
        ],
        [
            "this is test choice 1",
            [
                "this is test choice 5",
                "this is test choice 6"
            ],
            "fff",
            "ggg",
            [
                "this is test choice 10",
                "this is test choice 12"
            ],
            "this is test choice 16"
        ],
        [
            "this is test choice 4",
            [
                "this is test choice 5",
                "this is test choice 7",
                "this is test choice 8"
            ],
            "ggg",
            "iii",
            [
                "this is test choice 10",
                "this is test choice 11",
                "this is test choice 12",
                "this is test choice 9"
            ],
            "this is test choice 17"
        ],
        [
            "this is test choice 4",
            [
                "this is test choice 8",
                "this is test choice 7"
            ],
            "jjj",
            "kkk",
            [
                "this is test choice 10",
                "this is test choice 11"
            ],
            "this is test choice 14"
        ],
        [
            "this is test choice 1",
            [
                "this is test choice 5",
                "this is test choice 6"
            ],
            "iii",
            "lll",
            [
                "this is test choice 10",
                "this is test choice 11"
            ],
            "this is test choice 14"
        ],
        [
            "this is test choice 2",
            [
                "this is test choice 5",
                "this is test choice 6"
            ],
            "mmm",
            "nnn",
            [
                "this is test choice 12",
                "this is test choice 9"
            ],
            "this is test choice 13"
        ],
        [
            "this is test choice 3",
            [
                "this is test choice 7",
                "this is test choice 8"
            ],
            "ooo",
            "ppp",
            [
                "this is test choice 10",
                "this is test choice 11"
            ],
            "this is test choice 14"
        ],
        [
            "this is test choice 2",
            [
                "this is test choice 6"
            ],
            "qqq",
            "rrr",
            [
                "this is test choice 10",
                "this is test choice 11",
                "this is test choice 12"
            ],
            "this is test choice 16"
        ],
        [
            "this is test choice 4",
            [
                "this is test choice 5"
            ],
            "sss",
            "ttt",
            [
                "this is test choice 12",
                "this is test choice 9"
            ],
            "this is test choice 13"
        ],
        [
            "this is test choice 3",
            [
                "this is test choice 5",
                "this is test choice 8",
                "this is test choice 7"
            ],
            "uuu",
            "vvv",
            [
                "this is test choice 10",
                "this is test choice 9"
            ],
            "this is test choice 15"
        ],
        [
            "this is test choice 4",
            [
                "this is test choice 6",
                "this is test choice 8"
            ],
            "www",
            "xxx",
            [
                "this is test choice 11",
                "this is test choice 12"
            ],
            "this is test choice 17"
        ],
        [
            "this is test choice 2",
            [
                "this is test choice 5",
                "this is test choice 6"
            ],
            "yyy",
            "zzz",
            [
                "this is test choice 10",
                "this is test choice 9"
            ],
            "this is test choice 13"
        ]
    ],
    "1469717070527": [],
    "1469717318182": []
}
module.exports = {users: users, qns: qns, results: results}
users = JSON.stringify(users)
qns = JSON.stringify(qns)
results = JSON.stringify(results)
window.localStorage.users = users
window.localStorage.qns = qns
window.localStorage.results = results