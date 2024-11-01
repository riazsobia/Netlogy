'use strict';

// a class is like a blueprint
class Animal {
    // runs when creating a new instance
    constructor(name) {
        this.name = name;
    }
    // methods inside my class
    walk() {
        console.log(this.name);
        console.log('class method walking ....')
    }
}

class Dog extends Animal {
    
    speak() {
        console.log('class method woof! ..')
    }

    sing() {
        console.log('class mehtod lalalala ...')
    }

    run() {
        console.log(' will run using super walk from parent.. ');
        super.walk();
    }




}

module.exports = Dog;