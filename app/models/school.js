var mongoose = require('mongoose');

module.exports = mongoose.model('School', {
  name: String,
  url: String
});
