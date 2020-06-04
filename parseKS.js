var fs = require('fs')

function parseKS(html) {
    let vars = {}

    var include = new RegExp(/<(include)>([.-z]+)<\/include>/g);
    if (html.split(include)[1] !== undefined) {
        var arrayed = html.split(include)
        var i;
        for (i = 1; i < arrayed.length; i++) {
            if (arrayed[i] === 'include') {
                try {
                    data = fs.readFileSync(arrayed[i+1])
                    arrayed[i] = ''
                    arrayed[i+1] = data
                } catch (error) {
                    arrayed[i] = ''
                    arrayed[i+1] = error
                }
            }
        }
        html = arrayed.join(' ')
    }

    var timestamp = new RegExp(/<timestamp\/>()/g);
    if (html.split(timestamp)[1] !== undefined) {
        var arrayed = html.split(timestamp)
        var i;
        for (i = 1; i < arrayed.length; i++) {
            if (arrayed[i] == '') {
                arrayed[i] = Date.now()
                html = arrayed.join(' ')
            }
        }
    }

    var variable = new RegExp(/<(variable) ([A-z]\w+)>([\S\s]+?)<\/variable>/g);
    if (html.split(variable)[1] !== undefined) {
        var arrayed = html.split(variable)
        var i;
        for (i = 1; i < arrayed.length; i++) {
            if (arrayed[i] === "variable") {
                vars[arrayed[i + 1]] = arrayed[i + 2]
                console.log(vars)
                arrayed[i] = '';
                arrayed[i + 1] = '';
                arrayed[i + 2] = '';
                html = arrayed.join(' ')
            }
        }
    }

    var echo = new RegExp(/<(echo)>(\w+)<\/echo>/g);
    if (html.split(echo)[1] !== undefined) {
        var arrayed = html.split(echo)
        console.log(arrayed)
        var i;
        for (i = 1; i < arrayed.length; i++) {
            if (arrayed[i] === 'echo') {
                arrayed[i] = ''
                arrayed[i + 1] = vars[arrayed[i + 1]]
                html = arrayed.join(' ')
            }
        }
    }
    return html
}

module.exports = parseKS
