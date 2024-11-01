'use strict';

const HTTP = require('../lib/http');

// THis "spies" on console.log so we can know if it was called or not
jest.spyOn(global.console, 'log');


describe('HTTP Module', ()=> {

    it('fetch() does nothing with invalid options', ()=> {
        const http = new HTTP();
        http.fetch();
        expect(console.log).not.toHaveBeenCalled();
    });

    it('fetch() logs out result when given options', ()=> {
        const http = new HTTP();
        http.fetch({url: 'http://google.com'});
        expect(console.log).toHaveBeenCalled();
    });

});