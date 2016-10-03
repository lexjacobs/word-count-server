var express = require('express');
var router = express.Router();
var fs = require('fs');

router.post('/', function(req, res, next) {
  console.log('the request is: ', req.body);
  var result = wordCount(req.body)
  console.log(result);
  res.send(result);
});

module.exports = router;

/*
curl  -H "Content-Type: application/json" -X POST http://localhost:3000/count -d '{"key": "value"}'
 */

function wordCount(data) {
  console.log('the data received', data);
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
