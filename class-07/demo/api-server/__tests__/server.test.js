'use strict';

const {server} = require('../lib/server.js');

const supertest = require('supertest');

const mockRequest = supertest(server);

describe(' web server ', ()=> {

    let consoleSpy ;
    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(()=> {
        consoleSpy.mockRestore();
    });

    it('should respond with 500 on an error ', ()=> {
        return mockRequest.put('/fruit').then(result=> {
            expect(result.status).toBe(500);
        }).catch(console.error);
    });

    it('should respond with 404 on an invalid route ', ()=> {
        return mockRequest.get('/imaginary-route').then(result=> {
            expect(result.status).toBe(404);
        }).catch(console.error);
    });

    it('should respond with 404 on an invalid method ', ()=> {
        return mockRequest.post('/middleware').then(result=> {
            expect(result.status).toBe(404);
        }).catch(console.error);
    });

    it('should respond with 200 ', ()=> {
        return mockRequest.get('/fruit').then(result=> {
            expect(result.status).toBe(200);
        }).catch(console.error);
    });



})