require('./style.scss')

var Vue = require('vue')
    , verify = require('./verify.js')
    , qns = JSON.parse(localStorage.qns)
    , results = JSON.parse(localStorage.results)
    , qnId = verify.getQueryInfo().qnId
    , uid = verify.cookieUtil.get('user')
    , vm
Vue.use(require('vue-animated-list'))

if (qnId && qns[qnId]) {
    vm = new Vue({
        el: '#mainEdit'
        , data: {
            qn: qns[qnId]
            , addQuestionHide: true
            , user: uid
            , timeSpan: ''
            , popLayer: false
            , popLayerContent: ''
            , f: function () {
            }
            , arg: null
            , cancelVisible: true
        }
        , methods: {
            save: function () {
                this.qn.state = 'Unreleased'
                this.qn.start = ''
                this.qn.end = ''
                results[qnId] = []
                localStorage.qns = JSON.stringify(qns)
                localStorage.results = JSON.stringify(results)
                this.popLayerContent = 'Save Successfully, Return To The Questionnaire List?'
                this.popLayer = true
                this.f = function () {
                    window.location.href = './list.html'
                }
            }
            , addChoice: function (i, index) {
                this.qn.qs[i].choices.splice(index + 1, 0, '')
            }
            , removeChoice: function (i, index) {
                this.qn.qs[i].choices.splice(index, 1)
            }
            , addSingle: function () {
                this.qn.qs.push({
                    qid: Math.random()
                    , necessary: true
                    , type: 'radio'
                    , describe: ''
                    , choices: ['', '']
                })
                this.addQuestionHide = true
            }
            , addMultiple: function () {
                this.qn.qs.push({
                    qid: Math.random()
                    , necessary: true
                    , type: 'checkbox'
                    , describe: ''
                    , choices: ['', '']
                })
                this.addQuestionHide = true
            }
            , addText: function () {
                this.qn.qs.push({
                    qid: Math.random()
                    , necessary: true
                    , type: 'text'
                    , describe: ''
                })
                this.addQuestionHide = true
            }
            , addNewQuestion: function () {
                this.addQuestionHide = false
            }
            , moveUp: function (index) {
                var item = this.qn.qs.splice(index, 1)[0]
                var that = this
                setTimeout(function () {
                    that.qn.qs.splice(index - 1, 0, item)
                }, 100)

            }
            , moveDown: function (index) {
                var item = this.qn.qs.splice(index, 1)[0]
                var that = this
                setTimeout(function () {
                    that.qn.qs.splice(index + 1, 0, item)
                }, 100)
            }
            , copy: function (index) {
                var item = this.qn.qs[index]
                var copy = {}
                for (var i in item) {
                    if (item.hasOwnProperty(i)) {
                        copy[i] = item[i]
                    }
                }
                copy.qid = Math.random()
                this.qn.qs.splice(index + 1, 0, copy)
            }
            , deleteQuestion: function (index) {
                this.qn.qs.splice(index, 1)
            }
            , release: function () {
                var t = parseInt(this.timeSpan, 10)
                if (t < 1 || t > 999) {
                    this.popLayerContent = 'Please Input The Number Between 1 and 999'
                    this.popLayer = true
                } else {
                    this.popLayerContent = 'The Generated Link Of This Questionnaire is: '
                        + location.hostname + ':' + location.port + '/pages'
                        + '/answer.html?qnId=' + qnId
                    this.popLayer = true
                }
                var now = Date.now()
                now += t * 1000 * 3600 * 24
                t = new Date(now)
                this.qn.start = (new Date()).toDateString()
                this.qn.end = t.toDateString()
                this.qn.state = 'Released'
                localStorage.qns = JSON.stringify(qns)
                this.cancelVisible = false
                this.f = function () {
                    window.location.href = './list.html'
                }
            }
            , logOut: function () {
                var hostName = location.hostname
                verify.cookieUtil.unset('user', '/', hostName)
                window.location.href = '/'
            }
            , returnToList: function () {
                this.popLayerContent = 'Are You Sure To Go Back To Questionnaire List?'
                    + ' The Modification Will NOT Be Saved'
                this.popLayer = true
                this.f = function () {
                    window.location.href = './list.html'
                }
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
            , inputFilter: function () {
                this.timeSpan = this.timeSpan.replace(/[^\d]/g, '')
            }
        }
    })
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
