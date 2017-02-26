'use strict';

var fs = require('fs');
var html = fs.readFileSync(__dirname + '/../views/index.html','utf8');
var img = fs.readFileSync(__dirname + '/../assets/01.jpg');

module.exports = {
  'GET /': (_, res) => {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end(html);
  },
  'GET /01.jpeg': (_, res) => {
    res.writeHead(200,{'Content-Type': 'image/jpeg'});
    res.end(img);
  }
};
