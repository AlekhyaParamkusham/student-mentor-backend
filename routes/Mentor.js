const express = require("express");
const MentorController = require("./../controllers/Mentor");
const router = express.Router();

router.post("/", MentorController.createMentor);
router.get("/", MentorController.getAllMentors);

router.get("/:id", MentorController.getMentor);
router.patch("/:id", MentorController.updateMentor);

module.exports = router;
