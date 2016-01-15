var mongoose = require('mongoose');

var SchoolSchema = new mongoose.Schema({
  name: String,
  link: String,
  upvotes: {type: Number, default: 0},
  dates: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Date' }]
});

SchoolSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

mongoose.model('School', SchoolSchema);
