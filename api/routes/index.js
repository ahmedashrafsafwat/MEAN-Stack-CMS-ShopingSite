var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
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

module.exports = router;
