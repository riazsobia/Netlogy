'use strict';

class Queue {
    constructor() {
        this.storage = new Array();
        this.first = null;
    }

    enqueue(item) {
        this.storage.push(item);
    }

    dequeue() {
        let item = this.storage.shift();
        this.first = this.storage[0];
        return item;
    }

    peek() {
        // return this.storage[0];
        return this.first;
    }
}

module.exports = Queue;