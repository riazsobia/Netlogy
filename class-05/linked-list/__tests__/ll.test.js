'use strict';

const LL = require('../ll.js');

describe('LL Module', ()=> {
    it('constructor()', ()=> {
        let list = new LL();
        expect(list.head).toBeNull();
    });

    it('append()', ()=> {
        let list = new LL();
        let initialValue = 'initial Value! ';
        list.append(initialValue);
        expect(list.head.value).toEqual(initialValue);

        let secondlValue = 'Second Value! ';
        list.append(secondlValue);

        expect(list.head.value).toEqual(initialValue);
        expect(list.head.next.value).toEqual(secondlValue);
        expect(list.head.next.next).toBeNull();

    });
});