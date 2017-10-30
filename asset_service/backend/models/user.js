'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  user_id:String,
  uname:String,
  profile_image:String,
  last_update:String
});
var collectionName='userProfile'

module.exports = mongoose.model('userProfile', UserSchema,collectionName);