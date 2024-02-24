const express = require('express');
const controller = require('./../Controller/childController')

const router = express.Router();

router.route('/child')
        .get(controller.getChildren)
        .post(controller.addChild)
        .patch(controller.updateChild)
        .delete(controller.deleteChild);


        
router.get('/child/:id',controller.getChildByID)



module.exports = router;