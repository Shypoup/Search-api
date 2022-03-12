const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/task',{ useNewUrlParser: true,useUnifiedTopology: true },(e) => {
    if(e){
        console.log(`error is: ${e}`);
    }
    console.log('connected');
});

module.exports = {mongoose}; 
