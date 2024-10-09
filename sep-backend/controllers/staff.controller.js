const shortid = require('shortid');
var _ = require('lodash');
let staff = require('../database/testDB');


const controller = {
    loginUser: (req, res) => {
        data = req.body
        console.log("received data " + JSON.stringify(data));
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
    }
}

module.exports = controller;