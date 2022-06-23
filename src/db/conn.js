

const mongoose = require("mongoose"); 

// connection to mongodb and creating students-api database
mongoose.connect("mongodb://localhost:27017/students-api", {
    useNewUrlParser: true,
    useunifiedTopology: true
}).then(() => {
    console.log("connection is successful");
}).catch(() => {
    console.log("No connection");
    
  
}) 
  

