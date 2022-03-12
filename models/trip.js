const mongoose = require('mongoose');

var tripSchema =  new mongoose.Schema({

    tripType:{type:String, required:true},
    cabinClass:{type:String, required:true},
    passengers:[Number],
    currency:{type:String, required:true},
    infants:{type:Number, required:true},
    children:{type:Number, required:true},
    adults:{type:Number, required:true},
    country:{type:String, required:true},
    legs:[
        {
            origin:{type:String, required:true},
            destination:{type:String, required:true},
            departure:{type:String, required:true},
        }
    ]

})


var trip = mongoose.model('trips',tripSchema)
module.exports={trip}