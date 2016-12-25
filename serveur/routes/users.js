var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  //res.statusCode = 404;
  //return res.send('Error 404: No quote found');

  return res.json({success: true});
});

module.exports = router;
