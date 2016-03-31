'use strict';

// this is basic stuff
function sum(ls) {
	return ls.reduce((a,b) => a+b, 0);
}

console.log(sum([1,3,4]));

// this might be sensible
function to_linked_list(ls) {
	return ls.reduce((tail, head) => [head, tail], []);
}

console.log(to_linked_list([3,4,5]));

// this is just showing off
function tails(ls) {
	return ls.reduce((cont, element) => (accu, list) =>
			cont([list].concat(accu), [element].concat(list)),
			(accu, list) => [list].concat(accu))([], []);
}

console.log(tails([1,2,3]));

