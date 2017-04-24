var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

var TabSchema = new mongoose.Schema({
    name: String,
    tabBody: String
});

module.exports = mongoose.model('Tab', TabSchema); 