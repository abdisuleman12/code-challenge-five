var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the schema 

var messageSchema = new Schema ({
    name : { type: String },
    message : { type: String}
}); // end of schema 

module.exports = mongoose.model('Messages', messageSchema);