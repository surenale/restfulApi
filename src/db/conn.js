

const mongoose = require("mongoose"); 

mongoose.connect("mongodb://localhost:27017/students-api", {
    //useCreateIndex: true,
    useNewUrlParser: true,
    useunifiedTopology: true
}).then(() => {
    console.log("connection is successful");
}).catch(() => {
    console.log("No connection");
    
  
}) 
  
 

// we can check the connection successful or not by requiring
//the file in express application
