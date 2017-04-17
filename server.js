
// Call the packages needed
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// configure to use bodyParser to retrieve data from a POST
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// set the port
var port = process.env.PORT || 5000; // sets the port

// ROUTES FOR THE API
// =================================================================

var router = express.Router();

// test route to make sure everything is working(GET http://localhost:8080/api)
router.use(function(req, res, next){
    console.log('test route is running') // logging to make sure it'll work
    next(); // go onto the next route and don't stop here
});

// testing route with a GET method
router.get('/', function(req, res){
    res.json({message: 'WORKING - you can GET from the API, GOOD JOB!'})
});


router.route('/tabs') // on routes that end in '/tabs'
    
    // creates a new tab
    .post(function(req, res){
        
        var tab = new Tab();
        tab.name = req.body.name;

        tab.save(function(err){
            if (err)
                res.send(err)
                
            res.send({ message: 'Tab created and saved!'});
        });
    });

// all routes are prefixed to '/api'
app.use('/api', router);

// BASE SETUP
// =================================================================

// import mongoose module
var mongoose = require('mongoose'); 

// ...

// set up default mongoose connection
var mongoDB = 'mongodb://localhost/tab_db'; 
mongoose.connect(mongoDB);

// uses the Tab schema
var Tab = require('./static/js/models/tab');

// get the default connection
var db = mongoose.connection;

// throws error
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// uses resources found in the 'static' folder
app.use('/static',  express.static( path.join(__dirname, '/static')));

app.get('/', function(req, res){
        res.sendFile(path.join(__dirname + '/index.html')); 
});


// START THE SERVER
// =================================================================
app.listen(port);
console.log('Connected to Port ' + port);