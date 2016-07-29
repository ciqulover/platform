require('./style.scss')

var Vue = require('vue')
    , verify = require('./verify.js')
    , users = JSON.parse(localStorage.users)

if (!localStorage.users) {
    require('./dataBase.js')
}

function setCookie(name) {
    var hostName = location.hostname
    var dt = Date.parse(new Date())
    dt += 1000 * 60 * 60
    dt = new Date(dt)
    verify.cookieUtil.set('user', name, dt, '/', hostName)
}

new Vue({
    el: '#login'
    , data: {
        userName: ''
        , password: ''
        , rePassword: ''
        , state: 'login'
    }
    , methods: {
        login: function () {
            if(this.state!=='register'){
                if (users[this.userName]) {
                    if (users[this.userName.trim()]['password'] === this.password) {
                        setCookie(this.userName.trim())
                        window.location.href = './pages/list.html'
                    } else {
                        alert('Incorrect Password')
                    }
                } else {
                    alert('Invalid Account')
                }
            }
        }
        , register: function () {
            this.state = this.state === 'login' ? 'register' : 'login'
            this.userName = ''
            this.password = ''
            this.rePassword = ''
        }
        , affirmRegister: function () {
            if (this.userName.trim() && this.password.trim()) {
                if (this.password === this.rePassword) {
                    setCookie(this.userName.trim())
                    users[this.userName] = {
                        password: this.password
                        , qns: []
                    }
                    localStorage.users = JSON.stringify(users)
                    window.location.href = './pages/list.html'
                } else {
                    alert('Different Password Input')
                }
            } else {
                alert('Please Input Valid UserName And Password')
            }
        }
        , inputFilter: function () {
            this.userName = this.userName.replace(/[^\d|A-z]/g, '')
        }
    }
})