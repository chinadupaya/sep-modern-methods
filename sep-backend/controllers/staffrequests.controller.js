const shortid = require('shortid');
const testDB = require('../database/testDB');
var _ = require('lodash');

let staffRequests = testDB.staffRequests;

const controller = {
    // getStaffRequests: (req, res) => {
    //     var staffId = req.query.staffId;
    //     console.log("staffId ", staffId)
    //     if (staffId == '' || staffId == null || !staffId){
    //         return res.status(200).json({
    //             data: {
    //                 tasks: tasks
    //             }
    //         });
    //     }else if (staffId){
    //         let filteredTasks = _.filter(tasks, (x) => {
    //             return x.assignedTo.id == staffId
    //         });
    //         console.log("filteredTasks", filteredTasks)
    //         return res.status(200).json({
    //             data: {
    //                 tasks: filteredTasks
    //             }
    //         });
    //     }
    // },
    postStaffRequest: (req, res) => {
        let staffRequest = {
            id: shortid.generate(),
            contractType: req.body.contractType,
            requestingDept: req.body.requestingDept,
            yearsOfExperience: req.body.yearsOfExperience,
            jobTitle: req.body.jobTitle,
            jobDescription: req.body.jobDescription,
            status: 'created'
        }
        staffRequests.push(staffRequest)
        console.log("staffreqs", staffRequests);
        return res.status(200).json({
            data: {
                staffRequest: staffRequest
            }
        })
    },
    // addComments: (req, res) => {
    //     let taskId = req.params.taskId;
    //     // find task
    //     var task = _.find(tasks, {id: taskId})
    //     if (!task) {
    //         return res.status(404).json({
    //             error: {
    //                 status:404,
    //                 message: "Task not found"
    //             }
    //         });
    //     }
    //     console.log("taskhello", task);
    //     task.comments = req.body.comments || task.comments;
    //     console.log("tasks", tasks);
    //     return res.status(200).json({
    //         data: {
    //             task: task
    //         }
    //     })
    // },
}

module.exports = controller;