var express = require('express');
var router = express.Router();
var fs = require('fs');

router.post('/', function(req, res, next) {
  // req.body seems to come in as an object with a variable number of keys
  // TODO operate on all keys, regardless of number

  console.log('original request', Object.keys(req.body).join('**'));
  var result = wordCount(req.body)
  // console.log(result);
  res.send(result);
});

module.exports = router;

/*
curl  -H "Content-Type: application/json" -X POST http://localhost:3000/count -d '{"key": "value"}'
 */

function wordCount(data) {
  data = Object.keys(data)[0];
  data = data.split('');
  var count = {};

  for (var keys in data) {
    if (data[keys]) {

      try {
        var str = data[keys];
      } catch (e) {
        console.log('error', e);
      } finally {}

      str = data[keys];
      if (count[str]) {
        count[str]++;
      } else {
        count[str] = 1;
      }
    }
  }
  return count

}
