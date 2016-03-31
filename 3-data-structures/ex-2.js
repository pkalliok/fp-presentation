'use strict';

// recursive tails() for arrays, O(n^2) because of .slice()

function a_tails(array) {
	if (array.length === 0) return [[]];
	return [array].concat(a_tails(array.slice(1)));
}

console.log(a_tails([4,3,2]));

// we represent linked lists by nested arrays, e.g.
// 2 -> 3 -> 4 == [2, [3, [4, []]]]

function l_tails(list) {
	if (!list) return [[], []]; // linked list containing empty linked list
	return [list, l_tails(list[1])];
}

console.log(l_tails([2,[6,[4,[]]]]));

