// app/routes.js

// load the school model
var School = require('./models/school');

// expose the routes to our app with module.exports
module.exports = function(app) {

  // api ---------------------------------------------------------------------
  // get all schools
  app.get('/api/schools', function(req, res) {
    School.find(function(err, schools){
      if (err)
      res.send(err)
      res.json(schools);
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
  app.get('/api/', function(req, res) {
  res.sendfile('./public/index.html');
  });

};
