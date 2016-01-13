var express = require("express");
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var database = require('./config/database');
var port = process.env.PORT || 8080;
var passport = require('passport');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();


    // load the config
    mongoose.connect(database.url);
    // mongoose.connect(process.env.MONGOLAB_URL ;

    // log every request to the console
    // app.use(morgan('dev'));

    app.use(cookieParser());

    // app.use(bodyParser());

    // required for passport
// app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// connects assets like stylesheets
app.use(express.static(__dirname + '/public'));

 // parse application/x-www-form-urlencoded                           // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
// parse application/json
app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use(methodOverride());


// load the routes
// require('./config/passport')(passport);
require('./app/routes.js')(app);



// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);


exports = module.exports = app;
