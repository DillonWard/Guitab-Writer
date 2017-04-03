
// Call the packages needed
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// configure to use bodyParser to retrieve data from a POST
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// set the port
var port = process.env.PORT || 8080;
var router = express.Router();

// testing route 
router.get('/', function(req, res){
    res.json({message: 'WORKING'})
});

app.use('/api', router);

// import mongoose module
var mongoose = require('mongoose'); 

// set up default mongoose connection
var mongoDB = 'mongodb://localhost/tab_db'; 
mongoose.connect(mongoDB);

// get the default connection
var db = mongoose.connection;

// throws error
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// uses resources found in the 'static' folder
app.use('/static',  express.static( path.join(__dirname, '/static')));

app.get('/', function(req, res){
        res.sendFile(path.join(__dirname + '/index.html')); 
});

var Tab = require('./static/js/models/tab');

// start the server
app.listen(port);
console.log('Connected to Port ' + port);