var express = require('express');
var router = express.Router();

// load models into router
var mongoose = require('mongoose');
var School = mongoose.model('School');
var Date = mongoose.model('Date');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// get school page
router.get('/schools', function(req, res, next) {
  School.find(function(err, schools){
    if(err){ return next(err); }

    res.json(schools);
  });
});
router.param('school', function(req, res, next, id) {
  var query = School.findById(id);

  query.exec(function (err, school){
    if (err) { return next(err); }
    if (!school) { return next(new Error('can\'t find school')); }

    req.school = school;
    return next();
  });
});

router.post('/schools', function(req, res, next) {
  var school = new School(req.body);
console.log('in post schools')
  school.save(function(err, school){
    if(err){
      console.log(err);
      return next(err); }

    res.json(school);
  });
});

router.get('/schools/:school', function(req, res) {
  res.json(req.school);
});


router.put('/schools/:school/upvote', function(req, res, next) {
  req.school.upvote(function(err, school){
    if (err) { return next(err); }

    res.json(school);
  });
});
module.exports = router;
