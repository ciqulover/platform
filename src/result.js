require('./style.scss')

var Vue = require('vue')
    , verify = require('./verify.js')
    , eCharts = require('echarts')
    , displayInfo = require('./analysis')
    , qns = JSON.parse(localStorage.qns)
    , qnId = verify.getQueryInfo().qnId
    , uid = verify.cookieUtil.get('user')
    , info = displayInfo(qnId)
    , vm

if (qnId && info) {
    vm = new Vue({
        el: '#mainResult'
        , data: {
            title: qns[qnId].title
            , info: info
            , user: uid
            , popLayer: false
            , popLayerContent: ''
            , cancelVisible: true
            , f: function () {
            }
            , arg: null
        }
        , methods: {
            goBack: function () {
                window.location.href = './list.html'
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
    for (var i = 0, j = info.length; i < j; i++) {
        if (info[i].type !== 'text') {
            eCharts.init(document.getElementById('result' + i)).setOption(info[i])
        }
    }
} else {
    window.location.href = './error.html'
}

if (!uid) {
    document.getElementsByTagName('section')[0].style.display = 'none'
    vm.popLayerContent = 'Please Login!'
    vm.cancelVisible = false
    vm.popLayer = true
    vm.f = function () {
        window.location.href = '/'
    }
}

