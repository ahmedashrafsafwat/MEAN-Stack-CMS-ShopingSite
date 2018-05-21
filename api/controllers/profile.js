var mongoose = require('mongoose');
var User = mongoose.model('User');
var Item = mongoose.model('Item');

module.exports.profileRead = function(req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
        
        res.status(200).json(user);
      });
   
  }

};

module.exports.itemRead = function(req, res) {


    Item.find().exec(function(err, item) {
        console.log('i have read all the items save in db');
      res.status(200).json(item);
      if(err){
        console.log(err);
      }
    });
  

};
