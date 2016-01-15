var mongoose = require('mongoose');

var SchoolSchema = new mongoose.Schema({
  name: String,
  link: String,
  upvotes: {type: Number, default: 0},
  dates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Date' }]
});

mongoose.model('School', SchoolSchema);
