var express = require('express');
var router = express.Router();
var User=require('../controllers/user.js.js');
var Blog=require('../controllers/blog.js.js');

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ly' });
});

function checkLogin(req,res,next){
  if(req.session){
    next();
  }
  res.redirect('/login');
}

router.get('/',checkLogin);
*/
router.get('/',Blog.index);

router.get('/reg',User.reg);
router.post('/reg',User.do_reg);

router.get('/login',User.login);
router.post('/login',User.do_login);
router.get('/unlogin',User.unlogin);

router.post('/checkname',User.checkajax);

router.get('/xx/:username',User.yy);
router.get('/search',User.zz);

module.exports = router;
