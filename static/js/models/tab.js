var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

var TabSchema = new Schema({
    name: String,
    tab: String
});

module.exports = mongoose.model('Tab', TabSchema);