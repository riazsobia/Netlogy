'use strict';

const Node = require('../node.js');

describe('Node Module',()=> {
    it('constructor', ()=> {
        let value = 'anything';
        let node = new Node(value);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();
    });
});