// requiring mongoose dependency
var mongoose = require('mongoose')

// instantiate a name space for our Schema constructor defined by mongoose.
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

    // defining schema for dates.
    var DateSchema = new Schema({
      date: String,
    })

// defining schema for schools
var SchoolSchema = new Schema({
  name: String,
  url: String,
  address: String,
  dates: [DateSchema]
})



// setting models in mongoose utilizing schemas defined above, we'll be using
// these frequently throughout our app
mongoose.model("Date", DateSchema)
mongoose.model("School", SchoolSchema)
