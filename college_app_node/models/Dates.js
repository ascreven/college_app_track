var mongoose = require('mongoose');

var DateSchema = new mongoose.Schema({
  body: String,
  author: String,
  upvotes: {type: Number, default: 0},
  dates: Date,
  school: { type: mongoose.Schema.Types.ObjectId, ref: 'School' }
});

mongoose.model('Date', DateSchema);
