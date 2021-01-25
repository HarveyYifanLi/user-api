/*To run the unit tests, cd into the root directory and simply issue the command:
'mocha --exit test/routes/users-test.js' and also please make sure the dev app server is not 
currently running at localhost:8080 */
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../../index');
const should = chai.should();
const expect = chai.expect;

const usersListMock = require('../../mocks/users_list.json');
const userMock = require('../../mocks/user.json');

describe('GET /users', () => {
    it('should return a list of users when called', done => {
        chai
        .request(app)
        .get('/users')
        .end((err, res) => {
            res.should.have.status(200);
            expect(res.body).to.deep.equal(usersListMock);
            done();
        });
    });
});

describe('GET /users/:userId', () => {
    it('should return information for a specific user when called', done => {
        const userId = '600e34b040c0e77beda8f8a1';
        chai
        .request(app)
        .get('/users/' + userId)
        .end((err, res) => {
            res.should.have.status(200);
            expect(res.body).to.deep.equal(userMock);
            done();
        });
    });
});
