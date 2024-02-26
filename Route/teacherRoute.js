const express = require("express");
const controller = require("./../Controller/teacherController");
const validation = require("./../Core/validations/validationMiddleWare");
const teachervalidation = require("./../Validation/teachersValidations");
const { checkAdmin, checkTeacherAndAdmin } = require("./../Core/auth/authenticationMiddleWare");
const multer = require("multer");
const path = require("path");
const upload = require("../Core/Multer/MulterMiddleWare");



const router = express.Router();

router
	.route("/teachers")
	.all(checkAdmin)
	.get(controller.getAllTeachers)
	.post(upload.single("image"), teachervalidation.postValidation, validation, controller.addTeacher)
	.delete(teachervalidation.deleteValidation, validation, controller.deleteTeacher);

router.patch(
	"/teacher",
	checkTeacherAndAdmin,
	upload.single("image"),

	teachervalidation.patchValidation,
	validation,
	controller.updateTeacher
);
router.get("/teachers/:id", checkAdmin, teachervalidation.getTeacherValidation, validation, controller.getTeacher);

router.put("/changePassword",checkTeacherAndAdmin,teachervalidation.ChangePasswordValidation,controller.changePassword);
module.exports = router;
