'use strict';

//Animal constructor
function Animal(name){
    this.name = name;
}

Animal.prototype.walk = () => {
    console.log('walking ....');
}

const Dog = function(name) {
    Animal.call(this, name);
};
// add somethign for prototype
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.speak = () => {
    console.log('Woof !');
}

Dog.prototype.sing = () => {
    console.log('la lalalala !');
}

module.exports = Dog;

