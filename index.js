'use strict';

var http = require('http');

http.createServer(function(req,res){
  res.end('hello');
}).listen(process.env.PORT || 8000 , function(){
  console.log("Server is Running!");
});
