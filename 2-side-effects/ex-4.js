'use strict';

var ex3 = require('./ex-3');
var assert = require('assert');

// testing imperative code requires pre- and post-condition checking, or
// even mocking and testing for specific interactions, breaking design
// by contract

function test_partition() {
	let data = [2, 1, 3];
	let index = ex3.partition(data, 0, 2);
	let i = 0;
	for ( ; i < index; i++ ) {
		assert(data[i] < data[index], "bad data at " + i);
	}
	for ( ; i < data.length; i++ ) {
		assert(data[i] >= data[index], "bad data at " + i);
	}
}

// it would be even worse if test_partition didn't take its input as an
// argument!

test_partition();

// functional code can be tested by simple input-output relations.

var _ = require('ramda');

function test_partition2() {
	const norm_list = _.sortBy(_.identity);
	assert.deepEqual(norm_list(ex3.partition2([2, 1, 3])[1]), [2, 3]);
	assert.deepEqual(norm_list(ex3.partition2([3, 1, 4, 2])[0]), [1, 2]);
}

test_partition2();

