'use strict';

var test = require('tape');
var shot = require('shot');
var mainHandler = require('../api/main.js');

test('GET /: should get the main html page', (t) => {
  shot.inject(mainHandler,{method:'GET',url:'/'}, (res) => {
    var indexOf = res.payload.indexOf('body');
    t.notEqual(indexOf,-1,'got body somewhere in the html');
    t.equal(res.statusCode,200,'got 200 status code');
    t.end();
  });
});

test('GET /01.jpeg: should get the specific image', (t) => {
  shot.inject(mainHandler,{method:'GET',url:'/01.jpeg'}, (res) => {
    t.equal(res.statusCode,200,'got 200 status code');
    t.end();
  });
});
