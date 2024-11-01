// Functional Programming: pure functions

function pureMultiply(a, b) {
    return a * b ;
}

function impureMultiply(a, b) {
    console.log("a, b ", a, b);
    return a * b ;
}

let numbers = [1, 2, 3];
// 1, 4, 9
function pureSquare([...arr]) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = Math.pow(arr[i], 2);
    }
    return arr;
}

console.log("pureSquare -------> ")
console.log(pureSquare(numbers));
console.log("numbers : ", numbers);
console.log("--------- end of pureSquare -------> ")
let numbersArr = [10, 20, 30];
function impureSquare(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = Math.pow(arr[i], 2);
    }
    return arr;
    // this will not change on the origional array
    // var result = arr.map((item)=> {
    //    return item * item;
    // });
    
    // return result;
}


console.log("impureSquare -------> ")
console.log(impureSquare(numbersArr));
console.log("numbersArr: ", numbersArr)


let hi = function(name) {console.log("Hi , ", name);}
function sayHello(person, fnt) {
    fnt(person);
}

sayHello('Fatima', hi);

// High order Fuction 
function sayHi(person, fnt) {
    return function() {
        fnt(person);
    }
}

let greet = sayHi('Abdelrahman', hi);
console.log(' ------ now call it ')
greet();


