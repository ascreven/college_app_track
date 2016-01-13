

// load the school model
var School = require('./models/school');
// var passport= require('passport')
// expose the routes to our app with module.exports
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


  });



  // application -------------------------------------------------------------
  var path = require('path');
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  // GET /signup
  // POST /signup
  // GET /login
  // POST /login
  // GET /logout
  // Restricted page


  app.get('/signup', function(req, res){
    res.sendFile(path.join(__dirname, '../public/views/users/signup.html'));
  });
  app.post('/signup', function(req, res) {
    var signupStrategy = passport.authenticate('local-signup', {
      successRedirect : '/profile', // redirect to the secure profile section
      failureRedirect : '/', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
    });
    console.log("about to return strategy");
    return signupStrategy(req,res)
  });
  app.get('/signin', function(req, res){
    req.flash('loginMessage');
    res.sendFile(path.join(__dirname, '../public/views/users/signin.html'));
  });


  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  app.post('/login', function(req, res){

    var signinStrategy = passport.authenticate('local-login', {
      successRedirect : '/profile', // redirect to the secure profile section
      failureRedirect : '/signin', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
    })
    return signinStrategy(req,res)
  });


}
// // route middleware to make sure a user is logged in
// function isLoggedIn(req, res, next) {
//
//   // if user is authenticated in the session, carry on
//   if (req.isAuthenticated())
//   return next();
//
//   // if they aren't redirect them to the home page
//   res.redirect('/');
// }
