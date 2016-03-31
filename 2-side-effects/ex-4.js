'use strict';

var ex3 = require('./ex-3');
var assert = require('assert');

// testing imperative code requires pre- and post-condition checking, or
// even mocking and testing for specific interactions, breaking design
// by contract

function test_partition() {
	let data = [2, 1, 3];
	let index = ex3.partition(data, 0, 2);
	// it would be even worse if ex3.partition didn't take its input
	// as an argument!  We would have to set up objects etc.

	let i = 0;
	for ( ; i < index; i++ ) {
		assert(data[i] < data[index], "bad data at " + i);
	}
	for ( ; i < data.length; i++ ) {
		assert(data[i] >= data[index], "bad data at " + i);
	}
}

test_partition();

// functional code can be tested by simple input-output relations.

var _ = require('ramda');

function test_partition2() {
	const norm_lists = _.map(_.sortBy(_.identity));
	assert.deepEqual(norm_lists(ex3.partition2([2, 1, 3])),
			[[1], [2, 3]]);
	assert.deepEqual(norm_lists(ex3.partition2([3, 2, 4, 1])),
			[[1, 2], [3, 4]]);
	// Also, works as documentation about what partition2 does.
}

test_partition2();

