var express = require("express");
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var database = require('./config/database');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


    // load the config
    mongoose.connect(database.url);

// connects assets like stylesheets
app.use(express.static(__dirname + '/public'));
// log every request to the console
app.use(morgan('dev'));
 // parse application/x-www-form-urlencoded                           // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
// parse application/json
app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use(methodOverride());


// load the routes
require('./app/routes.js')(app);



// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
