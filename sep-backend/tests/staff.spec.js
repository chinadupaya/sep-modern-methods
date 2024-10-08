const serverApp = require('../app.js');
const testVal = require('./testValues.js');
const request = require('supertest');
const assert = require('assert');

describe('Staff', () => {
    let loginUser;
    beforeEach(() => {
        loginUser = testVal.loginUser
    })
    describe('POST /login', () =>{
        it('should respond with OK' , function (done) {
            request(serverApp).post('/login')
                .set('Content-Type', 'application/json')
                .send(loginUser)
                .expect(200)
                .expect(function(res) {
                    assert(res.body.hasOwnProperty('role'));
                  })
                .end(function(err, res) {
                    if (err) throw err;
                    done()
                  });
        })
    })
})