var express = require('express');
var router = express.Router();

// load models into router
var mongoose = require('mongoose');
var School = mongoose.model('School');
var Date = mongoose.model('Date');
// get school page
router.get('/schools', function(req, res, next) {
  console.log('in get school router');
  School.find(function(err, schools){
    if(err){ return next(err); }
console.log(schools);
    res.json(schools);
  });
});
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });



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

router.get('/schools/:school', function(req, res, next) {
  req.post.populate('dates', function(err, school){
    if (err) {return next(err);}
res.json(school);
  })
  // res.json(req.school);
});


router.put('/schools/:school/upvote', function(req, res, next) {
  req.school.upvote(function(err, school){
    if (err) { return next(err); }

    res.json(school);
  });
});

router.post('/schools/:school/dates', function(req, res, next) {
  var date = new Date(req.body);
  date.school = req.school;

  date.save(function(err, date){
    if(err){ return next(err); }

    req.school.dates.push(date);
    req.school.save(function(err, school) {
      if(err){ return next(err); }

      res.json(date);
    });
  });
});

router.param('date', function(req, res, next, id) {
  var query = Date.findById(id);

  query.exec(function (err, date){
    if (err) { return next(err); }
    if (!date) { return next(new Error('can\'t find date')); }

    req.date = date;
    return next();
  });
});

router.post('/schools/:school/dates/:date/upvote', function(req, res, next) {
  var date = new Date(req.body);
console.log('in post dates')
  date.save(function(err, date){
    if(err){
      console.log(err);
      return next(err); }

    res.json(date);
  });
});
module.exports = router;
