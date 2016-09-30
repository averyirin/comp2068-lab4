var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab4', message: 'Welcome to my family showcase' });
});

router.get('/Irin', function(req, res, next) {
  res.render('family', { title: 'Irin', description: 'Myself, a computer programmer at Georgian College, ' +
  'and co-founder of College Coders.' });
});

router.get('/Jaden', function(req, res, next) {
  res.render('family', { title: 'Jaden', description: 'Jaden is my twin brother who loves archery and playing guitar.' });
});

router.get('/Malcolm', function(req, res, next) {
  res.render('family', { title: 'Malcolm', description: 'Malcolm is the youngest and loves to play basketball.'});
});

router.get('/Ruby', function(req, res, next) {
  res.render('family', { title: 'Ruby', description: 'Ruby is the middle sister who enjoys skateboarding and music.' });
});

router.get('/Rustin', function(req, res, next) {
  res.render('family', { title: 'Rustin', description: 'Rustin is a taxi driver who loves to play basketball.' });
});

router.get('/Donna', function(req, res, next) {
  res.render('family', { title: 'Donna', description: 'Formerly known as Mothra, she is a stay at home mom who loves baking deserts.' });
});

router.get('/Melvin', function(req, res, next) {
  res.render('family', { title: 'Melvin', description: 'A content lazy black cat. Loves temptations.' });
});




module.exports = router;
