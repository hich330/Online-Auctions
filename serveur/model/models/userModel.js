var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	'nom' : {type: String, require: true},
	'prenom' : {type: String, require: true},
	'login' : {type: String, require: true},
	'password' : {type: String, require: true}
});

module.exports = mongoose.model('user', userSchema);
