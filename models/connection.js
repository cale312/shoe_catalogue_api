module.exports = function(app) {
  const mongoose = require('mongoose');
  const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/shoes";
  mongoose.connect(mongoURL);

  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('We are connected');
  });
}
