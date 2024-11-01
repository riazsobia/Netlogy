'use strict';


const Stack = require('../stack.js');

describe('stack', ()=> {
    
    it('creates a new instance', ()=> {
        let stack = new Stack();
        expect(stack instanceof Stack).toBeTruthy();
    });

    it('peek() on empty stack', ()=> {
       let stack = new Stack();
       expect(stack.peek()).toBeNull();
    });

    it('peek() after push', ()=> {
        let stack = new Stack();
        stack.push(1);
        expect(stack.peek()).toEqual(1);
        stack.push(2);
        expect(stack.peek()).toEqual(2);
     });

     it('peek() after pop', ()=> {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();
        expect(stack.peek()).toEqual(2);
     });

     it('push()', ()=> {
        let stack = new Stack();
        stack.push(1);
        expect(stack.top).toEqual(1);
        stack.push(2);
        expect(stack.top).toEqual(2);
        stack.push(3);
        expect(stack.top).toEqual(3);
     });

     it('pop() returns the removed item', ()=> {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toEqual(3);
        expect(stack.pop()).toEqual(2);
        expect(stack.pop()).toEqual(1);
     });

});