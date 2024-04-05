var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
//  res.setHeader('bar');
  res.end('Hello k8s World!');
}).listen(80);
