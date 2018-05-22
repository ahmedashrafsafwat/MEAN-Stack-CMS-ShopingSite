var express = require('express');
var router = express.Router();
var passport= require('passport');
var jwt = require('express-jwt');
// var fs = require('fs');

// const https = require('https');
// var keys = fs.readFileSync('private.key');

// var certs = fs.readFileSync( '/certificate.pem' );

// var credentials = {key: keys, cert: certs };
// var httpsServer = https.createServer(credentials, app);
// httpsServer.listen(443);

// var options = {
//   host: 'localhost',
//   port: 443,
//   path: '/auth/facebook',
//   method: 'get'
// };


var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlItem = require('../controllers/itemController');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);
router.get('/profile/item', ctrlProfile.itemRead);

router.post('/profile', ctrlItem.enterNewItem);
// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));
router.get('/auth/facebook/callback', 
	  passport.authenticate('facebook', { successRedirect: '/profile',
	                                      failureRedirect: '/login' }));

module.exports = router;
