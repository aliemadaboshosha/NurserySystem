const express = require('express');
const controller = require('./../Controller/classController');

const router = express.Router();

router.route('/class')
        .get(controller.getClasses)
        .post(controller.addClass)
        .put(controller.updateClass)
        .delete(controller.deleteClass);


router.get('/class/:id' , controller.getClassById);
router.get('/classchildren/:id',controller.getClassChildrenById);
router.get('/classteacher/:id',controller.getClassTeacherById);


module.exports = router;