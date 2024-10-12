const shortid = require('shortid');
var _ = require('lodash');
const testDB = require('../database/testDB');

const staff = testDB.staff;

const controller = {
    loginUser: (req, res) => {
        data = req.body
        // find user
        var user = _.find(staff, {email: data.email})
        if (!user) {
            return res.status(404).json({
                error: {
                    status:404,
                    message: "User not found"
                }
            });
        }
        // check user's password if same as req.body
        if (data.password != user.password) {
            return res.status(401).json({
                error: {
                    status:401,
                    message: "Invalid password"
                }
            })
        }
        let returnUser = _.omit(user, ['password'])
        return res.status(200).json(
            returnUser
        )
    },
    getStaff: (req, res) => {
        let staffCopy = JSON.parse(JSON.stringify(staff))
        var role = req.query.role;
        staffCopy.forEach(x => {
            delete x['password']
        })
        if (role == '' || role == null || !role){
            return res.status(200).json({
                data: {
                    staff: staffCopy
                }
            });
        }else if (role){
            let filteredStaff = _.filter(staffCopy, (x) => {
                return x.role == role
            });
            return res.status(200).json({
                data: {
                    staff: filteredStaff
                }
            });
        }
    }
}

module.exports = controller;