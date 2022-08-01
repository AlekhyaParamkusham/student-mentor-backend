const mongoose = require("mongoose");

const MentorSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please specify mentor's name."],
  },

  studentInfo: {
    type: Array,
  },
  hasStudent: {
    type: Boolean,
    default: false,
  },
});

const Mentor = mongoose.model("Mentor", MentorSchema);
module.exports = Mentor;
