const mongoose = require("mongoose");

const createConnection = (url) =>{
   return mongoose.connect(url);
}

module.exports =  createConnection;