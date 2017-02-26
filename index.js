'use strict';

var http = require('http');
var mainHandler = require('./api/main.js');
var PORT = 8000;

http.createServer(mainHandler).listen(process.env.PORT || PORT , () => {
  console.log(`Server running on ${PORT}`);
});
