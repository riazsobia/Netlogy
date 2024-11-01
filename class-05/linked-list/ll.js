'use strict';

const Node = require('./node.js');

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        // create a new node to be appended
        let node = new Node(value);
        // what if my LL is empty? then the new node is head
        if (!this.head) {
            this.head = node;
            return this;
        }
        // if I have stuff already, need to add at the end;
       let currentNode = this.head;
       while(currentNode.next) {
          currentNode = currentNode.next;
       }
       // exited the while because currentNode.next is null == reaching tail
       currentNode.next = node;
       return this;
    }
}

module.exports = LinkedList;