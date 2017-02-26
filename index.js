'use strict';

var http = require('http');
var fs = require('fs');
var html = fs.readFileSync(__dirname + '/index.html','utf8');
var PORT = 8000;

http.createServer(function(req,res){
  res.end(html);
}).listen(process.env.PORT || PORT , function() {
  console.log(`Server running on ${PORT}`);
});
