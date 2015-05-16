var express = require('express');
var router = express.Router();
var tweets = [];


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Mini twitter', tweets: tweets });
});

router.post('/', function(req, res, next) {
	var d = new Date();
	tweets.unshift(d.toUTCString());
	tweets.unshift(req.body.pseudo +' a envoyé: ' + req.body.tweet);
	res.redirect('/') 

});

if (req.body.pwd == '0000')
{
	module.exports = router;
}
else {alert('faux mot de passe');
}

