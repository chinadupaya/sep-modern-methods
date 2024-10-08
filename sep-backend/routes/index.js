var express = require('express');
var router = express.Router();

const eventRequestsController = require('../controllers/eventrequests.controller');
const staffController = require('../controllers/staff.controller')
router.get('/', function(req, res, next) {
    res.status(200).json({
      data:{
        message: "This is a health check"
      }
    })
});

router.post('/eventrequests', eventRequestsController.postEventRequest);
router.post('/login', staffController.loginUser);

module.exports = router;