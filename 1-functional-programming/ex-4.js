'use strict';

const greet = name => 'Hello, ' + name + '!';
const names = ['Panu', 'Henna', 'Kaneli', 'Peikko', 'Utu', 'Kaarna', 'Liekki'];
const greets = names => names.concat(['ghost']).map(greet);
const greeted = names => 'I greeted ' + names.length + ' people.';
const output = greets(names).concat([greeted(names)]);

// Since JS doesn't have a functional way to do I/O, we put this
// non-functional thing here at the end:

output.forEach(line => console.log(line));
