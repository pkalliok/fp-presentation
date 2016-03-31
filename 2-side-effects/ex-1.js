'use strict';

// since it's not tied to any object, it can be used to find the most
// valuable item of any list
	
function find_most_valuable(list) {
	let item1 = list[0];
	if (list.length <= 1) return item1;
	let item2 = find_most_valuable(list.slice(1));
	return item1.value > item2.value ? item1 : item2;
}

const data = [{value: 3, name: 'imperative'},
		{value: 7, name: 'functional'},
		{value: 5, name: 'data-flow'}]

console.log(find_most_valuable(data));

// However, it's also easy to see that it's a common pattern to search
// the maximal item by some criterion, so let's parameterise by that

function find_max_by(criterion, list) {
	let item1 = list[0];
	if (list.length <= 1) return item1;
	let item2 = find_most_valuable(list.slice(1));
	return criterion(item1) > criterion(item2) ? item1 : item2;
}

const find_most_valuable2 = list => find_max_by(item => item.value, list);

console.log(find_most_valuable2(data));

// Ramda has a _lot_ of predefined functions for stuff like this, as
// would any standard library of some functional language.

var _ = require('ramda');
const most_valuable3 = list =>
	_.reduce(_.maxBy(item => item.value), _.head(list), _.tail(list));

console.log(most_valuable3(data));

// This can be written in an even more cryptic way

const most_valuable4 =
	_.converge(_.reduce(_.maxBy(_.prop('value'))), [_.head, _.tail]);

console.log(most_valuable4(data));

