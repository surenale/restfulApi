//  RESTFul API with CRUD  operation using POST,GET,PUT/PATCH and DELETE.

//requiring express to use the functionality of express
const express = require('express');
const app = express();

//requiring the conn.js file to connect with mongoDb
require("./db/conn");

//require students.js for model extraction to main app page
// const Student = require("./models/students");

// requiring student.js for routing
const studentRouter = require("./routers/student");


const port = process.env.PORT || 8000;

//recognizing json format api in express application
app.use(express.json());

//registering our router
app.use(studentRouter);



//create a new students using promises
// app.post("/students", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// })


//for respose back to the user server should be listened
// so defining port for listening
app.listen(port, function () {
    console.log(`listening to port at ${port}`)
})