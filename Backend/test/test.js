let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");   // path to server file

chai.use(chaiHttp);
let should = chai.should();

describe('User Tests', () => {

    describe('Test Scripts', () => {

        it('/getuser', (done) => {
            chai.request(server)
                .get('/getuser')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });


        let testLoginData = {
            userName: 'Test Serial',  // login email
            password: '12345'    // login password
        }

        it('/login', (done) => {

            chai.request(server)
                .post('/login')
                .send(testLoginData)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

        let testSignupData = {
            serialNumber: 'Test Serial',  // first name
            fullName: 'John doe',  // last name
            WardId: '1',  // email
            mobile: '0714444444',  // contact number
            role: 'Nurse',  // nic
            password: '1234'  // password
        }

        it('/register', (done) => {

            chai.request(server)
                .post('/register')
                .send(testSignupData)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

    });

});

describe('Leave Tests', () => {

    describe('Test Scripts', () => {

        it('/getLeaves', (done) => {
            chai.request(server)
                .get('/getLeaves')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });


        let testLeaveData = { // data stored in the Leave collection
            userName: 'Test Serial',  // login email
            password: '12345'    // login password
        }

        it('/saveLeaves', (done) => {

            chai.request(server)
                .post('/saveLeaves')
                .send(testLeaveData)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

        let testLeaveUpdateData = { // data stored in the Leave collection
            fromDate: '2023-01-25',
            toDate: '203-01-27',
            leaveType: 'VL',
            serialNumber: 'Test Serial',
            reason: 'test reason',
            covering: '012243'
        }

        it('/updateLeave', (done) => {

            chai.request(server)
                .post('/updateLeave')
                .send(testLeaveUpdateData)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

    });

});

describe('Duty Tests', () => {

    describe('Test Scripts', () => {

        it('/getDuty', (done) => {
            chai.request(server)
                .get('/getDuty')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });


        let testDutyData = { // data stored in the Duty collection
            userName: 'Test Serial',  // login email
            password: '12345'    // login password
        }

        it('/saveDuty', (done) => {

            chai.request(server)
                .post('/saveDuty')
                .send(testDutyData)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

        let testDutyUpdateData = { // data stored in the Duty collection
            dutyDate: '2023-01-31',
            fromTime: '2013-01-31 05:30:00',
            toTime: '2013-01-31 12:30:00',
            assignedBy: 'Test Serial'
        }

        it('/updateDuty', (done) => {

            chai.request(server)
                .post('/updateDuty')
                .send(testDutyUpdateData)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

    });

});


