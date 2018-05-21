var mongoose = require( 'mongoose' );



var itemSchema = new mongoose.Schema({
    name: {
      type: String,
      unique: true,
      required: true
    },
    cat: {
      type: String,
      required: true
    },
    price:{
      type: Number,
      required: true
    },
    describtion: String,
    image: String
    
  });

  mongoose.model('Item', itemSchema);