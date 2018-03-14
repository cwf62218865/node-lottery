var express = require('express');
var request = require('request');
var router = express.Router();

//登录
router.get('/', function(req, res, next) {
    res.render('login/login',
        {
            title:	'登录',
        }
    );

});

//注册
router.get('/register', function(req, res, next) {
    res.render('login/register',
        {
            title:	'注册',
        }
    );

});

//忘记密码
router.get('/forgotpwd', function(req, res, next) {
    res.render('login/forgot-password',
        {
            title:	'忘记密码',
        }
    );

});

module.exports = router;

