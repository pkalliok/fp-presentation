'use strict';

var data = [5, 4, 2, 9, 3, 1, 0, 6, 7];

// Imperative algorithm, source: https://en.wikipedia.org/wiki/Quicksort
// It also has a very peculiar contract, creating some of its result
// in-place in the "A" argument, while returning another part of its
// result as value

function partition(A, lo, hi) {
	let pivot = A[lo];
	while (true) {
		while (A[lo] < pivot) { lo++; }
		while (A[hi] > pivot) { hi--; }
		if (lo >= hi) { return hi + 1; }
		var tmp = A[lo];
		A[lo] = A[hi];
		A[hi] = tmp;
		lo++;
		hi--;
	}
}

console.log(partition(data, 0, data.length - 1));
console.log(data);

// Functional algorithm; also, no hacks with indexes, just use separate
// lists for all subresults

var data = [5, 4, 2, 9, 3, 1, 0, 6, 7];

var _ = require('ramda');

const partition2 = list => _.partition(_.gt(_.head(list)), list);

console.log(partition2(data));

module.exports = { partition, partition2 };
