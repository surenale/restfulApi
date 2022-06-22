//  RESTFul API with CRUD  operation using POST,GET,PUT/PATCH and DELETE.

//requiring express to use the functionality of express
const express = require('express');
const app = express();

//requiring the conn.js file to connect with mongoDb
 require("./db/conn");

 //require students.js for model extraction to main app page
 const Student = require("./models/students"); 
 

const port = process.env.PORT || 8000;

app.use(express.json());
//create a new students 
app.post("/students", (req, res) => {
    console.log(req.body);
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
    //res.send("hello from the other side");
})


//for respose back to the user server should be listened
// so defining port for listening
app.listen(port, function(){
    console.log(`listening to port at ${port}`)
})