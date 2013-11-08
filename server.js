var express = require('express');
var mongodb = require('mongodb');

var app = express();
app.use(express.bodyParser());

//connect to mongo
mongodb.MongoClient.connect('mongodb://localhost/ocb', afterConnected);

//listen to the app
app.listen(8000);

function afterConnected(err, db) {
  if(err) {
    throw err;
  } else {
    //load Routes
    require('./lib/routes')(app, db);
  }
}