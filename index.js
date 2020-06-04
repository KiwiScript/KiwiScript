var http = require('http');
var url = require('url');
var fs = require('fs');
var parseKS = require('./parseKS')

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  if(filename === "./"){
    fs.readFile("index.ks", function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.writeHead(200, {'X-Powered-By': 'Kiwiscript 0.0.1-R7'});
        res.write(parseKS(data.toString()));
        return res.end();
      });
  }
  else{
    fs.readFile(filename, function(err, data) {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'});
          res.writeHead(200, {'X-Powered-By': 'Kiwiscript 0.0.1-R7'});
          return res.end("404 Not Found");
        } 
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.writeHead(200, {'X-Powered-By': 'Kiwiscript 0.0.1-R7'});
        res.write(parseKS(data.toString()));
        return res.end();
      });
  }

}).listen(8888); 