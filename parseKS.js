function parseKS(html) {
    let vars = {}

    var vr = new RegExp(/<(variable) ([A-z]\w+)>([\S\s]+?)<\/variable>/g);
    if (html.split(vr)[1] !== undefined) {
        var arrayed = html.split(vr)
        var i;
        for (i = 1; i < arrayed.length; i++) {
            if(arrayed[i] === "variable"){
                vars[arrayed[i + 1]] = arrayed[i + 2]
                console.log(vars)
                arrayed[i] = '';
                arrayed[i + 1] = ''; 
                arrayed[i + 2] = '';
                html = arrayed.join(' ')
            }
        }
    }

    var eo = new RegExp(/<(echo)>(\w+)<\/echo>/g);
    if (html.split(eo)[1] !== undefined) {
        var arrayed = html.split(eo)
        console.log(arrayed)
        var i;
        for (i = 1; i < arrayed.length; i++) {
            if(arrayed[i] === 'echo'){
                arrayed[i] = ''
                arrayed[i+1] = vars[arrayed[i+1]]
                html = arrayed.join(' ')
            }
        }
    }

    var ts = new RegExp(/<timestamp\/>()/g);
        if (html.split(ts)[1] !== undefined) {
            var arrayed = html.split(ts)
            var i;
            for (i = 1; i < arrayed.length; i++) {
                if(arrayed[i] == ''){
                    arrayed[i] = Date.now()
                    html = arrayed.join(' ')
                }
            }
        }

    return html
}

module.exports = parseKS