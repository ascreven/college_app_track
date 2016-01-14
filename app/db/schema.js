// requiring mongoose dependency
var mongoose = require('mongoose')

// instantiate a name space for our Schema constructor defined by mongoose.
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

// defining schema for dates
var DateSchema = new Schema({
  date: Date
});

// defining schema for schools.
var SchoolSchema = new Schema({
  name: String,
  photo: String,
  url: String,
  dates: [DateSchema]
});

// setting models in mongoose utilizing schemas defined above
var SchoolModel = mongoose.model("School", SchoolSchema)
var DateModel = mongoose.model("Date", DateSchema)
