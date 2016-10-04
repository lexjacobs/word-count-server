/* global require module */
var express = require('express');
var router = express.Router();
// var fs = require('fs');

router.post('/', function(req, res, next) {
  // req.body seems to come in as an object with a variable number of keys
  // TODO operate on all keys, regardless of number
  console.log('original request', Object.keys(req.body));
  var result = wordCount(req.body);
  // console.log(result);
  res.send(result);
});

module.exports.count = router;

/*
curl  -H "Content-Type: application/json" -X POST http://localhost:3000/count -d '{"key": "value"}'
 */

function wordCount(data) {
  console.log('this is what we got: ', data);
  data = Object.keys(data).join('');
  data = decodeURIComponent(data).split('');
  var count = {};

  data.forEach((letter) => {
    var str = letter;
    if (count[str]) {
      count[str]++;
    } else {
      count[str] = 1;
    }
  });

  return count;

}

module.exports.wordCount = wordCount;
