const shortid = require('shortid');
const testDB = require('../database/testDB');
var _ = require('lodash');

let eventRequests = testDB.eventRequests;

const controller = {
    getEventRequests: (req, res) => {
        var status = req.query.status;
        if (status == '' || status == null || !status){
            return res.status(200).json({
                data: {
                    eventRequests: eventRequests
                }
            });
        }else if(status == 'accept-seniorcsmanager') {
            let filteredEventRequests = _.filter(eventRequests, (x) => {
                return x.status =='accept-seniorcsmanager'
            });
            return res.status(200).json({
                data: {
                    eventRequests: filteredEventRequests
                }
            });
        }
    },
    postEventRequest: (req, res) => {
        let eventRequest = {
            id: shortid.generate(),
            clientId: req.body.clientId,
            clientName: req.body.clientName,
            eventType: req.body.eventType,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            expectedAttendees: req.body.expectedAttendees,
            expectedBudget: req.body.expectedBudget,
            preferences: req.body.preferences,
            updatedBy: {
                id: req.body.userId,
                name: req.body.userName,
                role: req.body.userRole,
            },
            comments: '',
            discount: 0,
            status: 'created'
        }
        console.log("eventRequest", eventRequest);
        eventRequests.push(eventRequest)
        return res.status(200).json(eventRequest)
    },
    putEventRequest: (req, res) =>{
        let eventRequestId = req.params.eventRequestId
        // find eventRequest
        var eventRequest = _.find(eventRequests, {id: eventRequestId})
        if (!eventRequest) {
            return res.status(404).json({
                error: {
                    status:404,
                    message: "Resource not found"
                }
            });
        }
        // if found, update discount, comments, status, updatedBy
        eventRequest.discount = req.body.discount || eventRequest.status;
        eventRequest.comments = req.body.comments || eventRequest.comments;
        eventRequest.status = req.body.status || eventRequest.status;
        eventRequest.updatedBy = {
            id: req.body.userId,
            name: req.body.userName,
            role: req.body.userRole,
        }
        console.log("new eventrequests", eventRequests);
        return res.status(200).json({
            data: {
                eventRequest
            }
        })

    }
}

module.exports = controller;