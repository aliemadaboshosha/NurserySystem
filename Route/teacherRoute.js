const express = require('express');
const controller = require('./../Controller/teacherController')

const router = express.Router();

router.route('/teacher')
        .get(controller.getTeachers)
        .post(controller.addTeacher)
        .put(controller.updateTeacher);





module.exports = router;