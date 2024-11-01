'use strict';

const logger = require('../lib/logger');


describe('logger middleware', ()=> {

    let consoleSpy;

    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(()=> {
        consoleSpy.mockRestore();
    });

    it('properly logs request', ()=>{
        let req = {};
        let res = {};
        let next = jest.fn();
        console.log("**************************************** ")
        logger(req, res, next);
        // expect the log to have been called
        expect(consoleSpy).toHaveBeenCalled();
    });
});