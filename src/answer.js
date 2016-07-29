require('./style.scss')

var Vue = require('vue')
    , verify = require('./verify.js')
    , qns = JSON.parse(localStorage.qns)
    , qnId = verify.getQueryInfo().qnId
    , uid = verify.cookieUtil.get('user')

if (qnId && qns[qnId]) {
    var results = JSON.parse(localStorage.results)
    var ans = []
    qns[qnId].qs.forEach(function (item) {
        if (item.type === 'radio' || item.type === 'text') {
            ans.push('')
        } else if (item.type === 'checkbox') {
            ans.push([])
        }
    })
    new Vue({
        el: '#mainAnswer'
        , data: {
            qn: qns[qnId]
            , ans: ans
            , user: uid
            , popLayer: false
            , popLayerContent: ''
            , cancelVisible: true
            , f: function () {
            }
            , arg: null
        }
        , methods: {
            save: function () {
                results[qnId].push(this.ans)
                var answer = this.ans
                var qs = qns[qnId].qs
                var unAnswered = qs.some(function (item, index) {
                    return (item.necessary && ((item.type === 'radio' && answer[index] === '')
                    || (item.type === 'checkbox' && !answer[index][0])
                    || (item.type === 'text' && answer[index] === '')))
                })
                if (unAnswered) {
                    this.popLayerContent = 'Please Fill In The Question Which Is Necessary To Answer'
                    this.cancelVisible = false
                    this.popLayer = true
                } else {
                    localStorage.results = JSON.stringify(results)
                    if (uid) window.location.href = './list.html'
                }

            }
            , logOut: function () {
                var hostName = location.hostname
                verify.cookieUtil.unset('user', '/', hostName)
                window.location.href = '/'
            }
            , returnToList: function () {
                window.location.href = './list.html'
            }
            , ok: function (f) {
                f(this.arg)
                this.popLayer = false
                this.f = function () {
                }
            }
            , cancel: function () {
                this.popLayer = false
            }
        }
    })
} else {
    window.location.href = './error.html'
}
