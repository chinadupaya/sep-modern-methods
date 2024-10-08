var express = require('express');
var router = express.Router();

const controller = require('../controllers/main.controller');

router.get('/', function(req, res, next) {
    res.status(200).json({
      data:{
        message: "This is a health check"
      }
    })
});

router.post('/eventrequests', controller.postEventRequest);

module.exports = router;