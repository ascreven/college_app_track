var mongoose = require('mongoose');
var database = require('../../config/database');
mongoose.connect(database.url);

var SchoolModel = require('../models/school.js');
SchoolModel.remove({}, function(err){
  console.log(err);
})


var schoolsData = [
  {"name":"Northern Arizona University","photo":"https://upload.wikimedia.org/wikipedia/en/a/a0/NAU_Seal.png","url":"nau.edu/"},
  {"name":"University of Arizona","photo":"https://upload.wikimedia.org/wikipedia/en/thumb/4/43/University_of_Arizona_Seal.svg/1059px-University_of_Arizona_Seal.svg.png","url":"http://www.arizona.edu/"},
  {"name":"University of Michigan","photo":"https://upload.wikimedia.org/wikipedia/en/b/b8/Umichigan_color_seal.png","url":"https://www.umich.edu/"},
  {"name":"Arizona State University","photo":"https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Arizona_State_University_seal.svg/1024px-Arizona_State_University_seal.svg.png","url":"http://www.asu.edu/"}
]

//loop thru schoolsData
for(var i = 0; i <= schoolsData.length; i++){
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
