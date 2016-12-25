var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/smartBid');
//mongodb://root:makhlouf330@ds145178.mlab.com:45178/smart-bid
//mongodb://localhost:27017/smartBid

var db = mongoose.connection;

db.on('error', function (error) {
    console.log('******** Erreur Mongoose **********');
    console.log(error);
    console.log('******** Erreur Mongoose **********');
});

db.on('open', function () {
    console.log('******** MongoDB OPEN *********');
});

exports.mongoose = mongoose;
