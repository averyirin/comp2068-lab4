var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var userList = ['Irin'];
  res.render('users',
      {title:'User List',
        users: userList});
});

module.exports = router;
