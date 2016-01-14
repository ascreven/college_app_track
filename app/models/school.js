var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchoolSchema = new Schema({
  name: String,
  photo: String,
  url: String
});
module.exports = mongoose.model('School', SchoolSchema);
