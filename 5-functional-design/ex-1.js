'use strict';

const data = [{foo: 1, bar: 2, baz: "zz"}, {foo: 2, bar: 8, baz: "joi"}];

// We want a function that gives the foo's of those records

function foos(recs) {
	if (!recs.length) return [];
	return [recs[0].foo].concat(foos(recs.slice(1)));
}

console.log(foos(data));

// We want a function that gives the bar's, so we refactor to a more general:

function fields(fieldname, recs) {
	if (!recs.length) return [];
	return [recs[0][fieldname]].concat(fields(fieldname, recs.slice(1)));
}

const bars = recs => fields('bar', recs); // ditto for foos

console.log(bars(data));

// But suddenly, we want a function that gives the sum of foo and bar :/
// So we parameterise, instead of by field name, by whatever operation
// we want to do to those records

function op_results(op, recs) {
	if (!recs.length) return [];
	return [op(recs[0])].concat(op_results(op, recs.slice(1)));
} // op_results is usually called "map"

const foos2 = recs => op_results(rec => rec.foo, recs);
const bars2 = recs => op_results(rec => rec.bar, recs);
const foobarsums = recs => op_results(rec => rec.foo + rec.bar, recs);

console.log([foos2, bars2, foobarsums].map(fn => fn(data)));

// now we notice the similarity between rec => rec.foo and rec =>
// rec.bar and decide that is worth making a function constructor

const property_getter = propname => rec => rec[propname];
const foos3 = recs => op_results(property_getter('foo'), recs);
const bars3 = recs => op_results(property_getter('bar'), recs);
// now it is getting questionable why we even would have a separate
// "foos" function.

console.log(foos3(data));

// due to currying, in Ramda foos3 would be just _.map(_.prop('foo')).

