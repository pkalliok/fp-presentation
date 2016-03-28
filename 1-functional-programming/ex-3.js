'use strict';

let greeted = 0;
let greet = names => {
	greeted += names.length; // Wrong: don't change global variables
	names.push('ghost'); // Wrong: don't modify data structures
	names.forEach(name => console.log('Hello, ' + name + '!'));
	// Wrong: don't cause input to be read or output to be printed
	// Also, don't use a database, don't contact AWS, etc.
};

greet(['Panu', 'Henna', 'Kaneli', 'Peikko', 'Utu', 'Kaarna', 'Liekki']);
console.log('I greeted ' + greeted + ' people.');

