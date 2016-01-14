

// load the school model
var School = require('./models/school');
var Date = require('./models/date');
// var passport= require('passport')
// expose the routes to our app with module.exports
var passport = require("passport")



module.exports = function(app) {

  // api ---------------------------------------------------------------------
  // get all schools
  app.route('/api/schools')
  .get(function(req, res) {
    School.find(function(err, schools){
      if (err)
      res.send(err)
      res.json(schools);
    });
  });

  app.route('/api/schools/:school_id')
  .get(function(req, res) {
    School.findById(req.params.school_id, function(err, school){
      if (err)
      res.send(err)
      res.json(school);
    });
  });

  // create schools and send back all schools after creation
  app.post('/api/schools', function(req, res) {
    School.create({
      name : req.name.text,
      url : req.url.text
    }, function(err,school){
      if (err)
      res.send(err);
      School.find(function(err, schools){
        if (err)
        res.send(err)
        res.json(schools);
      });
    });
  });



  // delete a school
  app.delete('/api/schools/:school_id', function(req, res) {
    School.remove({
      _id : req.params.school_id
    }, function(err, school){
      if (err)
      res.send(err);

      School.find(function(err, schools){
        if (err)
        res.send(err)
        res.json(schools);
      });
    });


    // GET /signup
    function getSignup(request, response) {
      response.render("signup.hbs", { message: request.flash('signupMessage') });
    }

    // POST /signup
    function postSignup(request, response) {
      var signupStrategy = passport.authenticate('local-signup', {
        successRedirect : '/',
        failureRedirect : '/signup',
        failureFlash : true
      });
      return signupStrategy(request, response);
    }

    // GET /login
    function getLogin(request, response) {
      console.log('test')
      successRedirect : '/'
    }

    // POST /login
    function postLogin(request, response) {
      var loginProperty = passport.authenticate('local-login', {
        successRedirect : '/',
        failureRedirect : '/login',
        failureFlash : true
      });
      console.log('test')
      return loginProperty(request, response);
    }

    // GET /logout
    function getLogout(request, response) {
      request.logout();
      response.redirect('/');
    }

    // Restricted page
    function secret(request, response){
      response.render("secret.hbs");
    }


  });



  // application -------------------------------------------------------------
  var path = require('path');
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
}
