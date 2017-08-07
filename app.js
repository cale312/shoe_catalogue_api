const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDB = require('./models/connection');
const app = express();

app.use('/public', express.static('public'));
app.use(bodyParser.json());

// change promise library
mongoose.Promise = global.Promise;

// routes
app.get('/', function(req,res) {
  res.send("use '/api/shoes', to access the shoe stock");
});

app.use('/api', require('./routes/api'));

connectDB(app);

const port = process.env.PORT || 4000;
app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});
