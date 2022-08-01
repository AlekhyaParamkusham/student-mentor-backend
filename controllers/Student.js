const Student = require("./../models/Student");
const Mentor = require("./../models/Mentor");
const catchAsync = require("./../utils/catchAsync");

exports.createStudent = async (req, res, next) => {
  const newStudent = await Student.create(req.body);

  res.status(201).json({
    status: "success",
    data: newStudent,
  });
};

exports.getAllStudents = async (req, res, next) => {
  const students = await Student.find();

  res.status(200).json({
    status: "success",
    count: students.length,
    data: students,
  });
};

exports.getStudent = async (req, res, next) => {
  const student = await Student.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: student,
  });
};

exports.updateStudent = catchAsync(async (req, res, next) => {
  const studentId = req.params.id;
  console.log(studentId, req.body);

  const updatedStudent = await Student.findByIdAndUpdate(
    studentId,
    {
      $set: { mentorInfo: req.body.mentorInfo, hasMentor: true },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (updatedStudent) {
    const mentorId = req.body.mentorInfo;
    const data = await Student.findById(studentId);

    const updated = await Mentor.findByIdAndUpdate(mentorId, {
      $set: { studentInfo: data.id, hasStudent: true },
    });
  }

  res.status(200).json({
    status: "success",
    data: updatedStudent,
  });
});
