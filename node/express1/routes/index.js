var express = require('express');
var router = express.Router();
var User=require('../controllers/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ly' });
});

router.get('/reg',User.reg);
router.post('/reg',User.do_reg);

router.get('/login',User.login);
router.post('/login',User.do_login);

module.exports = router;
