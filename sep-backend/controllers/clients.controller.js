const shortid = require('shortid');
var _ = require('lodash');
const testDB = require('../database/testDB');

const clients = testDB.clients;

const controller = {
    getClients: (req, res) => {
        return res.status(200).json(
            {
                data: {
                    clients: clients
                }
            }
        )
    }
}

module.exports = controller;