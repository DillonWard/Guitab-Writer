var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

var TabSchema = new mongoose.Schema({
    name: String,
    tab: String
});

module.exports = mongoose.model('Tab', TabSchema);