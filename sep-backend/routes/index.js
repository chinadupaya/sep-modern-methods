var express = require('express');
var router = express.Router();

const eventRequestsController = require('../controllers/eventrequests.controller');
const staffController = require('../controllers/staff.controller')
const clientController = require('../controllers/clients.controller')
const eventsController = require('../controllers/events.controller')
const tasksController = require('../controllers/tasks.controller')
const staffRequestsController = require('../controllers/staffrequests.controller')


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

router.get('/staffrequests', staffRequestsController.getStaffRequests)
router.post('/staffrequests', staffRequestsController.postStaffRequest)
router.put('/staffrequests/:staffRequestId', staffRequestsController.putStaffRequest)

router.get('/events',eventsController.getEvents);
router.post('/events',eventsController.postEvent);
router.put('/events/:eventId/financialrequests',eventsController.putEventFinancialRequest);
router.put('/events/:eventId/financialrequests/:financialRequestId',eventsController.changeFinancialRequestStatus);
router.put('/events/:eventId/status',eventsController.changeEventStatus);

router.post('/tasks',tasksController.postTask);
router.get('/tasks',tasksController.getTasks);
router.put('/tasks/:taskId',tasksController.addComments);
router.get('/tasks/:taskId',tasksController.getTask);

router.get('/staff', staffController.getStaff);
router.post('/login', staffController.loginUser);

router.get('/clients', clientController.getClients);

module.exports = router;