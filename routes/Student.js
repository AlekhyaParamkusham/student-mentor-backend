const express = require("express");
const StudentController = require("./../controllers/Student");
const router = express.Router();

router.post("/", StudentController.createStudent);
router.get("/", StudentController.getAllStudents);

router.get("/:id", StudentController.getStudent);
router.patch("/:id", StudentController.updateStudent);

module.exports = router;
