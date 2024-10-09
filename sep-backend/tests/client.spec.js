const serverApp = require('../app.js');
const testVal = require('./testValues.js');
const request = require('supertest');
const assert = require('assert');
describe('Test /clients', () => {
    let clients;
    beforeEach(() => {
        clients = testVal.clients
    })
    describe('GET /clients', () =>{
        it('should respond with OK' , function (done) {
            request(serverApp).get('/clients')
                .set('Content-Type', 'application/json')
                .expect(200)
                .expect(function (res) {
                    console.log(res.body);
                    assert(res.body.data.hasOwnProperty('clients'));
                })
                .end(function(err, res) {
                    if (err) throw err;
                    done()
                });
        })
    })
})