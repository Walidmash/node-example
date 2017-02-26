'use strict';

var router = require('./router.js');

module.exports = function(req,res) {
  var path = `${req.method} ${req.url}`;
  try {
    router[path](req,res);
  } catch(error) {
    res.end('Not found');
  }
};