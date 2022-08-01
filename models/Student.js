const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please specify Student's name."],
  },
  mentorInfo: {
    type: String,
  },
  hasMentor: {
    type: Boolean,
    default: false,
  },
});

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
