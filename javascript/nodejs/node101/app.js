// normal function statement
function sayHi(){
    console.log("hi");
}

sayHi();

// function expression
function sayBye(){
    console.log("bye");
}

sayBye();

// function with function as parameter
function callFunction(fun) {
    fun();
}

callFunction(sayBye);


// #6
var stuff = require('./stuff');

console.log(stuff.counter(["A", "B", "C"]));
console.log(stuff.adder(5, 6));
console.log(stuff.adder(stuff.pi, 5));

