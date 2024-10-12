const shortid = require('shortid');
const testDB = require('../database/testDB');
var _ = require('lodash');

let tasks = testDB.tasks;

const controller = {
    // getEvents: (req, res) => {
    //     var status = req.query.status;
    //     if (status == '' || status == null || !status){
    //         return res.status(200).json({
    //             data: {
    //                 events: events
    //             }
    //         });
    //     }else if (status){
    //         let filteredEvents = _.filter(events, (x) => {
    //             return x.status == status
    //         });
    //         return res.status(200).json({
    //             data: {
    //                 eventRequests: filteredEvents
    //             }
    //         });
    //     }
    // },
    postTask: (req, res) => {
        let task = {
            id: shortid.generate(),
            eventId: req.body.eventId,
            eventType: req.body.eventType,
            description: req.body.description,
            priority: req.body.priority,
            department: req.body.department,
            assignedTo: {
                id: req.body.userId,
                name: req.body.userName,
                role: req.body.userRole,
            },
            comments: ''
        }
        tasks.push(task)
        return res.status(200).json({
            data: {
                task: task
            }
        })
    }
}

module.exports = controller;