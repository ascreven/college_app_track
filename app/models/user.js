// grab the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


// create a schema
var userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});


// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
  console.log('in generate hash');
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};


// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// user model
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
