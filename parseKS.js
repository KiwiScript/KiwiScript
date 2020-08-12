var fs = require('fs')
var kiwi = require('kiwi-logger')

function parseKS(html) {
    var vars = {}

    html = html.replace(/<include>(.+?)<\/include>/g, ($1, $2)=>{
        try {
            data = fs.readFileSync($2)
            return data
        } catch (error) {
            return error
        }
    })

    html = html.replace(/<timestamp\/>/g, ()=>{
        return Date.now()
    })

    html = html.replace(/<variable.+?(\w+)>(.+?)<\/variable>/g, ($1, $2, $3)=>{
        vars[$2] = $3
        return ""
    })

    var echo = new RegExp(/<echo>(\w+)<\/echo>/g);
    html = html.replace(/<echo>(\w+)<\/echo>/g, ($1, $2)=>{
        return vars[$2]
    })

    return html
}

module.exports = parseKS
