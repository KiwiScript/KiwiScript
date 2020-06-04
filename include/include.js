var fs = require('fs')

function include(html) {
    var include = new RegExp(/<(include)>([.-z]+)<\/include>/g);
    if (html.split(include)[1] !== undefined) {
        var arrayed = html.split(include)
        var i;
        for (i = 1; i < arrayed.length; i++) {
            if (arrayed[i] === 'include') {
                data = fs.readFileSync(arrayed[i+1])
                arrayed[i] = ''
                    arrayed[i+1] = data
                    html = arrayed.join(' ')
                    console.log(html)
                    return html
            }
        }
    }
}

module.exports = include