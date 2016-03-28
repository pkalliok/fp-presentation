'use strict';

let decorator = ' ### ';
let decorate = string =>
	decorator + string + decorator;
	// Wrong!  (unless decorator never changes)

console.log(decorate('Welcome'));
decorator = '--'
console.log(decorate('this is a comment'));

