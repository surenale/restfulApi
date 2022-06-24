//  RESTFul API with CRUD  operation using POST,GET,PUT/PATCH and DELETE.

//requiring express to use the functionality of express
const express = require('express');
const app = express();

//requiring the conn.js file to connect with mongoDb
require("./db/conn");

//require students.js for model extraction to main app page
const Student = require("./models/students");


const port = process.env.PORT || 8000;

//recognizing json format api in express application
app.use(express.json());

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

// create a new students using async await
app.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);

    } catch (e) {
        res.status(400).send(e);
    }
})

// read the data of registered students
app.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch (e) {
        res.send(e);
    }
})

// get the individual Student data using id
app.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        if (!studentData) {
            return res.status(404).send();
        } else {
            res.send(studentData);
        }
    } catch (e) {
        res.status(500).send(e);
    }
})

//update the students by it's id
app.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updateStudent);
    } catch (e) {
        res.status(404).send(e);
    }
})

// delete the student by it's id
app.delete("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);
        if(!_id){
            return res.status(400).send(); 
        }
        res.send(deleteStudent);
    } catch (e) {
        res.status(500).send(e);
    }
})


//for respose back to the user server should be listened
// so defining port for listening
app.listen(port, function () {
    console.log(`listening to port at ${port}`)
})