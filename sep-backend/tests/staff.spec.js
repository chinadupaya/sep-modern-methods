const serverApp = require('../app.js');
const testVal = require('./testValues.js');
const request = require('supertest');
const assert = require('assert');
const sandbox = require("sinon").createSandbox();
const _ = require('lodash')

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);


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
    });
    describe('GET /staff', () => {
        it('should response with OK', function (done) {
            request(serverApp).get('/staff')
            .set('Content-Type', 'application/json')
            .expect(200)
            .end(function(err, res) {
                if (err) throw err;
                expect(res.body.data).to.have.property('staff')
                done()
              });
        })
    });
})