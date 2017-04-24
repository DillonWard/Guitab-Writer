
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

// test route to make sure everything is working(GET ://localhost:5000/api)
router.use(function(req, res, next){
    next(); // go onto the next route and don't stop here
});

// testing route with a GET method
router.get('/', function(req, res){
});

router.route('/tabs') // on routes that end in '/tabs'
    
    // creates a new tab
    .post(function(req, res){
        
        var tab = new Tab();
        tab.name = req.body.name;
        tab.tabBody = req.body.tabBody;
        
        tab.save(function(err){
            if (err)
                res.send(err)
                
            res.send({ message: 'Tab created and saved!'});
        });
    })
// gets the tab from the database
    .get(function(req, res){
        Tab.find(function(err, tabs){
            if (err)
                res.send(err);
            res.json(tabs);
        });
    });

router.route('/tabs/:tab_id')

    // get the tab with that id (accessed at GET http://localhost:5000/api/tabs/:tab_id)
    .get(function(req, res) {
        Tab.findById(req.params.tab_id, function(err, tab) {
            if (err)
                res.send(err);
            res.json(tab);
        });
    })
   
    // update the tab with this id(accessed at PUT http://localhost:5000/api/tabs/:tab_id)

    .put(function(req, res){

        // use the tab model to the tab wanted
        Tab.findById(req.params.tab_id, function(err, tab){
            if(err)
                res.send(err);
            
            tab.name = req.body.name; // update the info

            // save the tab
            tab.save(function(err){
                if(err)
                    res.send(err);
                
                res.json({message: 'Tab Updated!'});
            });
        });
    })

// delete tab
    .delete(function(req, res){
        Tab.remove({
            _id: req.params.tab_id
        },  function(err, tab){
            if(err)
                res.send(err);
            
            res.json({message: 'Tab Deleted!'});


        });  
    });

// all routes are prefixed to '/api'

app.use('/api', router);

// BASE SETUP
// =================================================================

// import mongoose module
var mongoose = require('mongoose'); 


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
        res.sendFile(path.join(__dirname + '/static/index.html')); 
});

/*
app.get('/tabview', function(req, res){
        res.sendFile(path.join(__dirname + '/static/tabview.html')); 
});
*/

// START THE SERVER
// =================================================================
app.listen(port);
console.log("Connected to port: " + port)