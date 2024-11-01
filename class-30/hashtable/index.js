'use strict';

// buckets -> save data in bucket, use linked list to save this data
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }

    values() {
        //return me the values of the ll in an array by traversing it
        const values = [];
        let current = this.head;
        while(current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        // hash the key and return the hashed value
        const sumCharCode = key.split('').reduce((acc, char)=> {
            return acc + char.charCodeAt(0)
        }, 0);
        console.log("sumCharCode >>>> ", sumCharCode);
        // we need to multiply by a prime number, and then get % of size
        return (sumCharCode * 19) %  this.size;
    }

    set(key, value) {
        // create a new LinkedList inst, 
        // or add to the current one if exists.
        let hash = this.hash(key);
        if (!this.table[hash]) {
            this.table[hash] = new LinkedList();
        }
        const entry = { [key] : value}; // this is an object but can be anything
        this.table[hash].add(entry);
    }
}

const hashTable = new HashTable(1024);
hashTable.set('cat', 'Candy');
hashTable.set('act', 'Christian Bale');
hashTable.set('name', 'Husam');
hashTable.set('act', 'Husam');
hashTable.set('city', 'Aqaba');
hashTable.set('name', 'Hanaa');
hashTable.table.forEach((data, i)=> {
    console.log(i, '==================>');
    if (data) {
        console.log(data.values());
    }
})