const Mentor = require("./../models/Mentor");
const Student = require("./../models/Student");
const catchAsync = require("./../utils/catchAsync");

exports.createMentor = async (req, res, next) => {
  const newMentor = await Mentor.create(req.body);

  res.status(201).json({
    status: "success",
    data: newMentor,
  });
};

exports.getAllMentors = async (req, res, next) => {
  const mentors = await Mentor.find();

  res.status(200).json({
    status: "success",
    count: mentors.length,
    data: mentors,
  });
};

exports.getMentor = async (req, res, next) => {
  const mentor = await Mentor.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: mentor,
  });
};

exports.updateMentor = catchAsync(async (req, res, next) => {
  const updatedMentor = await Mentor.findByIdAndUpdate(
    req.params.id,
    { $set: { studentInfo: req.body.studentInfo, hasStudent: true } },
    {
      new: true,
      runValidators: true,
    }
  );

  if (updatedMentor) {
    const studentId = req.body.studentInfo;
    const data = await Mentor.findById(req.params.id);

    for (var i = 0; i < studentId.length; i++) {
      let updated = await Student.findByIdAndUpdate(studentId[i], {
        $set: { mentorInfo: data.id, hasMentor: true },
      });
    }
  }

  res.status(200).json({
    status: "success",
    data: updatedMentor,
  });
});
