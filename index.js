'use strict';

var http = require('http');

http.createServer(function(req,res){
  res.end('hello');
}).listen(8000 , function(){
  console.log("Server is Running!");
});
