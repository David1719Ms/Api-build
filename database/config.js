const mongoose = require('mongoose');

const dbConnection = async () => {
    try{
        //Connect to database
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('Connect to database');
    }catch(error){
        console.log(error);
    }
}


module.exports = dbConnection;
