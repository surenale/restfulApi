const mongoose = require('mongoose');
const validator = require('validator');

//defining schema using mongoose
const studentsSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      minlength: 4
   },

   email: {
      type: String,
      required: true,
      unique: [true, "Email id already present"],
      validator(value) {
         if (!validator.isEmail(value)) {
            throw new Error("Invalid Email");
         }
      }
   },
   phone: {
      type: Number,
      min: 10,
      required: true,
      unique: true

   },
   address: {
      type:String,
      required: true
   }

})  

//now creating the collection
const Student = new mongoose.model("Student",studentsSchema);
module.exports = Student;