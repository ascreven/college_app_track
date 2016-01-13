var mongoose = require('mongoose');
var database = require('../../config/database');
mongoose.connect(database.url);

var SchoolModel = require('../models/school.js');
SchoolModel.remove({}, function(err){
  console.log(err);
})


var schoolsData = [
  {"name":"Northern Arizona University"},
  {"name":"University of Arizona","url":"http://www.arizona.edu/"},

]

//loop thru schoolsData
for(var i = 0; i < schoolsData.length; i++){
  var schoolInfo = schoolsData[i]
  console.log("si", schoolInfo)
  var school = new SchoolModel(schoolInfo)
  console.log("s", school)
  school.save(function(err, savedSchool){
    if (err){
      console.log("ERR", err)
    } else {
      console.log("school was saved ", savedSchool.name)
    }
  });
}
