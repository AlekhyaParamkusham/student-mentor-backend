const express = require("express");
const cors = require("cors");
const studentRoute = require("./routes/Student");
const mentorRoute = require("./routes/Mentor");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/student", studentRoute);
app.use("/mentor", mentorRoute);
module.exports = app;
