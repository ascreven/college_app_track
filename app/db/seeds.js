var mongoose = require('mongoose');
var database = require('../../config/database');
mongoose.connect(database.url);

var SchoolModel = require('../models/school.js');
var DateModel = require('../models/date.js');
SchoolModel.remove({}, function(err){
  if (err){
    console.log("Error removing schools", err);
  }
});

DateModel.remove({}, function(err){
  if (err){
    console.log("Error removing dates", err);
  }
});


var school1 = new SchoolModel({"name":"Northern Arizona University","photo":"https://upload.wikimedia.org/wikipedia/en/a/a0/NAU_Seal.png","url":"nau.edu/"});
var school2 = new SchoolModel({"name":"University of Arizona","photo":"https://upload.wikimedia.org/wikipedia/en/thumb/4/43/University_of_Arizona_Seal.svg/1059px-University_of_Arizona_Seal.svg.png","url":"http://www.arizona.edu/"});
var school3 = new SchoolModel({"name":"University of Michigan","photo":"https://upload.wikimedia.org/wikipedia/en/b/b8/Umichigan_color_seal.png","url":"https://www.umich.edu/"});
var school4 = new SchoolModel({"name":"Arizona State University","photo":"https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Arizona_State_University_seal.svg/1024px-Arizona_State_University_seal.svg.png","url":"http://www.asu.edu/"});

var date1 = new DateModel({date: '1/25/2016'});
var date2 = new DateModel({date: '1/26/2016'});
var date3 = new DateModel({date: '1/27/2016'});
var date4 = new DateModel({date: '1/28/2016'});


var schools = [school1, school2, school3, school4];
var dates = [date1, date2, date3, date4];
//loop thru schoolsData
for(var i = 0; i < schools.length; i++){
  schools[i].dates.push(dates[i]);
  schools[i].save(function(err, saved_school){
    if (err){
      console.log("ERR", err);
    }else {
      console.log("school was saved", saved_school);
    }
  });
}
