var express = require('express');
var router = express.Router();

const eventRequestsController = require('../controllers/eventrequests.controller');
const staffController = require('../controllers/staff.controller')
const clientController = require('../controllers/clients.controller')
const eventsController = require('../controllers/events.controller')
const tasksController = require('../controllers/tasks.controller')


router.get('/', function(req, res, next) {
    res.status(200).json({
      data:{
        message: "This is a health check"
      }
    })
});

router.get('/eventrequests', eventRequestsController.getEventRequests);
router.post('/eventrequests', eventRequestsController.postEventRequest);
router.put('/eventrequests/:eventRequestId',eventRequestsController.putEventRequest);


router.get('/events',eventsController.getEvents);
router.post('/events',eventsController.postEvent);

router.post('/tasks',tasksController.postTask);

router.get('/staff', staffController.getStaff);
router.post('/login', staffController.loginUser);

router.get('/clients', clientController.getClients);

module.exports = router;