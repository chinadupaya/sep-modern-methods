const serverApp = require('../app.js');
const testVal = require('./testValues.js');
const request = require('supertest');
const assert = require('assert');

describe('Staff', () => {
    let loginUser;
    let loginUserNotFoundError;
    beforeEach(() => {
        loginUser = testVal.loginUser
        loginUserNotFoundError = testVal.loginUserNotFoundError
    })
    describe('POST /login', () =>{
        it('should respond with OK and return staff info' , function (done) {
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
        });
        it('should respond with error' , function (done) {
            request(serverApp).post('/login')
                .set('Content-Type', 'application/json')
                .send(loginUserNotFoundError)
                .expect(404)
                .expect(function(res) {
                    assert(res.body.hasOwnProperty('error'));
                  })
                .end(function(err, res) {
                    if (err) throw err;
                    done()
                  });
        })
    })
})