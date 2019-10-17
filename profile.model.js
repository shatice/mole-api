const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-url');

// Define collection and schema for Post
const Profile = new Schema({
  name: String,

  cardContent: String,
  cardImage: String,
  cardSound: String,

  vimeoId: Number,

  intro: String,
  firstArticleTitle: String,
  firstArticleContent: String,
  secondArticleTitle: String,
  secondArticleContent: String,
  outside: String,

  YPos: Number,
  XPos: Number
}, {
  collection: 'profiles'
});

module.exports = mongoose.model('Profile', Profile);
