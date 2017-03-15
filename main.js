
var express = require('express');
var app = express();
var path = require('path');

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

app.listen(300, function(){
    console.log('Connected to Port 300')
});

// schema