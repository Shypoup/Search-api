const express = require('express');
const bodyParser = require('body-parser');
const {trip } = require('./models/trip')
const app = express();
const {mongoose}=require('./config/db');

app.use(bodyParser.json());

app.get('/api/search/travolic',async(req,res) => {
    try {
         const tripType = req.query.tripType;
         const cabinClass=req.query.cabinClass;
         const passengers =req.query.passengers
         const  currency=req.query.currency;
         const  infants=req.query.infants;
         const  children=req.query.children
         const  adults=req.query.adults
         const  country=req.query.country;
         const  legs=req.query.legs;
         var tripdetail = await trip.find({tripType ,cabinClass,passengers,currency,infants,children,adults,legs,country})
        
         res.send(tripdetail)
    } catch (error) {
        
    }

})

app.listen(5000,(e) => {
    if(e){
        console.log(e);
    }
    console.log(`Server Running in 5000`);
});