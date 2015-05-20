var express = require('express');
var router = express.Router();
var tweets = [];
var connected = '0'
var name;
var passwd = '0000';

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Mini twitter', tweets: tweets });
});

router.post('/publish', function(req, res, next) {
	var d = new Date();
	tweets.unshift(d.toUTCString());
	tweets.unshift(name +' a envoyé: ' + req.body.tweet);
	res.redirect('/logged_in');
});

router.get('/logged_in', function(req, res){
	if (connected == '1')
		res.render('logged_in', { title: 'Mini twitter', pseudo: name, tweets: tweets });
	else
		res.redirect('/');
});

router.post('/disconnect', function(req, res) {
	connected = '0';
	res.redirect('/');
});

router.post('/logged_in', function(req, res, next) {
	
	name = req.body.pseudo;
	
	if (passwd != req.body.pwd) {
		console.log("Identifiants invalides !");
		connected = '0';
		res.redirect('/');
		return;
	}
	connected = '1';
	res.render('logged_in', { title: 'Mini twitter', pseudo: name, tweets: tweets });
});

module.exports = router;
