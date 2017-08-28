var express = require('express');
var router = express.Router();

var Messages = require('../models/messages.schema.js');


router.get('/', function (req, res) {
    Messages.find({}, function (err, data) {
        if (err) {
            console.log('find error: ', err);
            res.sendStatus(500)
        } else {
            console.log('found data: ', data)
            res.send(data);
        }
    });
}) // end of get route 

router.post('/', function(req,res) {
    console.log('new message to store', req.body);

    // use model/constructor to make a mongoose object
    var messagesToSaveToTheCollection = new Messages(req.body);

    //insert into collection
    messagesToSaveToTheCollection.save(function (err, data) {
        console.log('saved to the collection ', data);
        if(err) {
            console.log('err' , err);
            res.sendStatus(500)
        } else {
            res.sendStatus(201);
        }
    }); // end of insert into collection function 
}); // end of post route 

module.exports = router; 
