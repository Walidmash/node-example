'use strict';

var http = require('http');
var fs = require('fs');

var html = fs.readFileSync(__dirname + '/index.html','utf8');

http.createServer(function(req,res){
  res.end(html);
}).listen(process.env.PORT || 8000 , function(){
  console.log("Server is Running!");
});
