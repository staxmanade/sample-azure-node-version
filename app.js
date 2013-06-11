var http = require('http');
http.createServer(function(req, res){
  console.log("Hello World");
  res.end("Hello World");
}).listen(process.env.port);
