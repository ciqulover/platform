require('./style.scss')

var Vue = require('vue')
    , verify = require('./verify')
    , qns = JSON.parse(localStorage.qns)
    , users = JSON.parse(localStorage.users)
    , userQns = {}
    , uid = verify.cookieUtil.get('user')

if (uid && users[uid]) {
    for (var i = 0, j = users[uid]['qns']; i < j.length; i++) {
        userQns[j[i]] = qns[j[i]]
    }
}

for (var item in userQns) {
    var end = Date.parse(new Date(userQns[item].end))
    var now = Date.now()
    if (now > end) {
        qns[item].state = 'Finished'
        userQns[item].state = 'Finished'
        localStorage.qns = JSON.stringify(qns)
    }
}

var vm = new Vue({
    el: '#mainList'
    , data: {
        qns: userQns
        , selectList: []
        , checkedAll: false
        , user: uid
        , popLayer: false
        , popLayerContent: ''
        , cancelVisible: true
        , f: function () {
        }
        , arg: null
    }
    , methods: {
        selectAll: function () {
            if (!this.checkedAll) {
                for (var item in this.qns) {
                    if (this.qns.hasOwnProperty(item)
                        && this.selectList.indexOf(item) === -1) {
                        this.selectList.push(item)
                    }
                }
            } else {
                this.selectList = []
            }
        }
        , deleteSome: function () {
            this.popLayerContent = "Are You Sure To Delete Them?"
            this.popLayer = true
            var that = this

            this.f = function () {
                var index = getDeleteList().sort().reverse()
                index.forEach(function (item) {
                    users[uid].qns.splice(item, 1)
                })
                localStorage.users = JSON.stringify(users)
                for (var i = 0; i < that.selectList.length; i++) {
                    Vue.delete(that.qns, that.selectList[i])
                    that.checkedAll = false
                }
                localStorage.qns = JSON.stringify(that.qns)
            }
        }
        , deleteOne: function (key) {
            this.popLayerContent = "Are You Sure To Delete It?"
            this.popLayer = true
            this.arg = key
            var that = this
            this.f = function (key) {
                var index = (getDeleteList(key))[0]
                users[uid].qns.splice(index, 1)
                localStorage.users = JSON.stringify(users)
                Vue.delete(that.qns, key)
                localStorage.qns = JSON.stringify(that.qns)
            }
        }
        , edit: function (key) {
            window.location.href = './edit.html?qnId=' + key
        }
        , fillIn: function (key) {
            window.location.href = './answer.html?qnId=' + key
        }
        , result: function (key) {
            window.location.href = './result.html?qnId=' + key
        }
        , addNewQuestionnaire: function () {
            var now = Date.now().toString()
            qns[now] = {
                "user": uid
                , "title": "Default Title"
                , "start": ""
                , "end": ""
                , "state": "Unreleased"
                , "qs": []
            }
            users[uid].qns.push(now)
            localStorage.users = JSON.stringify(users)
            localStorage.qns = JSON.stringify(qns)
            window.location.href = './edit.html?qnId=' + now
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


if (!uid || !users[uid]) {
    document.getElementsByTagName('section')[0].style.display = 'none'
    vm.popLayerContent = 'Please Login!'
    vm.cancelVisible = false
    vm.popLayer = true
    vm.f = function () {
        window.location.href = '/'
    }
}

function getDeleteList(key) {
    var list = []
    if (key === undefined) {
        for (var i = 0; i < vm.selectList.length; i++) {
            var ind = (function (i) {
                return users[uid].qns.findIndex(function (value) {
                    return value === vm.selectList[i]
                })
            })(i)
            list.push(ind)
        }
    } else {
        ind = users[uid].qns.findIndex(function (value) {
            return value === key
        })
        list.push(ind)
    }
    return list
}