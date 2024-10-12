const shortid = require('shortid');
const testDB = require('../database/testDB');
var _ = require('lodash');

let tasks = testDB.tasks;

const controller = {
    getTasks: (req, res) => {
        var staffId = req.query.staffId;
        if (staffId == '' || staffId == null || !staffId){
            return res.status(200).json({
                data: {
                    tasks: tasks
                }
            });
        }else if (staffId){
            let filteredTasks = _.filter(tasks, (x) => {
                return x.assignedTo.id == staffId
            });
            return res.status(200).json({
                data: {
                    tasks: filteredTasks
                }
            });
        }
    },
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
        console.log("taks", tasks);
        return res.status(200).json({
            data: {
                task: task
            }
        })
    }
}

module.exports = controller;