// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
var User            = require('../app/models/user');

// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
      console.log("In the passport callback");

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'local.email' :  username }, function(err, user) {
            // if there are any errors, return the error
            if (err){
            console.log("err" + done(err));
                return done(err);
              }
            // check to see if theres already a user with that email
            else if (user) {
              console.log("email taken" + done(null, false, req.flash('signupMessage', 'That email is already taken.')))
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {
                console.log("About to create a new user");


                // if there is no user with that email
                // create the user
                var newUser            = new User();

                // set the user's local credentials
                newUser.username    = email;
                newUser.password = newUser.generateHash(password);

                // save the user
                newUser.save(function(err) {
                    if (err){
                    console.log("err saving user " + err)
                        throw err;
                      }
                    return done(null, newUser);
                });
            }

        });

        });

    }))
    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    }, function(req, email, password, callback){
      User.findOne({ 'local.email' :  email }, function(err, user) {
           if (err) {
             console.log("err" + callback(err));
             return callback(err);
           }

           // If no user is found
           if (!user) {
            //  console.log(callback("no user " + null, false, req.flash('loginMessage', 'No user found.')))
             return callback(null, false, req.flash('loginMessage', 'No user found.'));
           }
           // Wrong password
           if (!user.validPassword(password)) {
             console.log(callback(null, false, req.flash("invalid password" + 'loginMessage', 'Oops! Wrong password.')))
             return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
           }
          console.log(callback(null, user))
           return callback(null, user);
         });
    }));

};
