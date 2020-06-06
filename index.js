var http = require('http');
var fs = require('fs')
var url = require('url'); 
var parseKS = require("./parseKS")

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  if(q.pathname === '/'){
  fs.readFile('./index.ks', (err, data) => {
    if(err){
      res.writeHead(404, {'content-type' : 'text/html'});
      res.writeHead(404, {'X-Powered-By' : 'KiwiScript 0.0.2-R0'});
      res.write('404: not found');
      return res.end();
    }
    res.writeHead(200, {'content-type' : 'text/html'});
    res.writeHead(200, {'X-Powered-By' : 'KiwiScript 0.0.2-R0'});
    res.write(parseKS(data.toString()));
    return res.end();
  })}else{
  fs.readFile(filename, (err, data) => {
    if(err){
      res.writeHead(404, {'content-type' : 'text/html'});
      res.writeHead(404, {'X-Powered-By' : 'KiwiScript 0.0.2-R0'});
      res.write('404: not found');
      return res.end();
    }
    res.writeHead(200, {'content-type' : 'text/html'});
    res.writeHead(200, {'X-Powered-By' : 'KiwiScript 0.0.2-R0'});
    res.write(parseKS(data.toString()));
    return res.end();
  })}
}).listen(8888);