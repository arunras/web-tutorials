var events = require('events');
/*
var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent', function (msg) {
    console.log(msg);
});
myEmitter.emit('someEvent', 'The event was emitted');
*/

var util = require('util');

var Person = function (name) {
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('James');
var mary = new Person('Mary');
var yura = new Person('Yura');
var people = [james, mary, yura];

people.forEach( function (person){
    person.on('speak', function (msg) {
        console.log(person.name + 'said: ' + msg); 
    });
});

james.emit('speak', 'hey dudes');
mary.emit('speak', 'I want a curry');

