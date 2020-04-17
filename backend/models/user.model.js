const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  phone:{
    type:String,
    required:true,
    minlength:10,
    maxlength:10
  },
    adress:{
      type:String,
      required:true
    }
  
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;