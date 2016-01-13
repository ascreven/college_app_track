
// connects us to the schools database in mongo
module.exports = {
  url: process.env.MONGOLAB_URI || 'mongodb://localhost/schools'
};
