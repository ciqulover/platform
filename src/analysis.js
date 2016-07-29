var qns = JSON.parse(localStorage.qns)
    , result = JSON.parse(localStorage.results)

module.exports = function (qnId) {
    if (!qns[qnId] || !result[qnId])return false
    var options = []
    for (var i = 0; i < qns[qnId].qs.length; i++) {
        var obj = {}
        var data = []
        obj.type = qns[qnId].qs[i].type
        if (qns[qnId].qs[i].type === 'text') {
            result[qnId].forEach(function (item) {
                data.push(item[i])
            })
            obj.data = data
            obj.title = qns[qnId].qs[i].describe
            options.push(obj)
        } else {
            var choices = qns[qnId].qs[i].choices
            var legend = {
                orient: 'vertical'
                , left: 'left'
                , data: []
            }
            choices.forEach(function (item) {
                data.push({name: item, value: 0})
                legend.data.push(item)
            })
            obj.title = {text: qns[qnId].qs[i].describe, x: 'right'}
            obj.legend = legend
            if (qns[qnId].qs[i].type == 'radio') {
                data.forEach(function (item1) {
                    result[qnId].forEach(function (item2) {
                        if (item2[i] === item1.name) {
                            item1.value++
                        }
                    })
                })
            } else {
                data.forEach(function (item1) {
                    result[qnId].forEach(function (item2) {
                        if (Array.isArray(item2[i])) {
                            item2[i].forEach(function (item3) {
                                if (item3 === item1.name) {
                                    item1.value++
                                }
                            })
                        }
                    })
                })
            }
            obj.series = [
                {
                    name: qns[qnId].qs[i].describe
                    , type: 'pie'
                    , radius: '55%'
                    , data: data
                }
            ]
            options.push(obj)
        }
    }
    return options
}