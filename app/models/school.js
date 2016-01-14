require("../db/schema")
var mongoose = require('mongoose')

var SchoolModel = mongoose.model("School")
module.exports = SchoolModel
