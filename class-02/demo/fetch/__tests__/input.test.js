'use strict';

const Input = require('../lib/input');
const minimist = require('minimist');

// mocking
jest.mock('minimist');
minimist.mockImplementation(()=>{
    return {
        u: 'https://google.com',
        m: 'post',
        b: 'testbody'
    }
});

describe('Input Module', ()=>{
    
    it('the method is b default GET', ()=> {
        let options = new Input();
        expect(options.validateMethod()).toEqual('GET');
    })
    
    it('the Method should be the mocked method', ()=> {
        let options = new Input();
        expect(options.method).toEqual('post');
    })

    it('Valid() respects url and method', ()=>{
        let options = new Input();
        expect(options.valid()).toBeTruthy();
    })
});



