/*
 * The main server entry file
 */

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var apiRoutes = require('./routes/apiRoutes');

var config = require('./config');
require('dotenv');

// Public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/api', apiRoutes);

// Starting the engine
app.listen(config.httpPort, () => {
  console.log(
    `We have a ${config.name} server running on PORT: ${config.httpPort}`
  );
});
