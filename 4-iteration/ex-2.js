'use strict';

const _ = require('ramda');
const data = [{name: "Panu", dad: "Mikko", mom: "Podo"},
           {name: "Henna", dad: "Matti", mom: "Heidi"},
           {name: "Riikka", dad: "?", mom: "Tuula"},
           {name: "Martta", dad: "Martti", mom: "Tiina"},
           {name: "Kaneli", dad: "Panu", mom: "Martta"},
           {name: "Peikko", dad: "Panu", mom: "Martta"},
           {name: "Utu", dad: "Panu", mom: "Martta"},
           {name: "Kaarna", dad: "Panu", mom: "Riikka"},
           {name: "Liekki", dad: "Panu", mom: "Henna"}];

const crossmap = ls1 => _.chain(e2 => _.map(e => [e, e2], ls1));
const cartesian_square = ls => crossmap(ls)(ls);

const pair_has_common_parent =
	_.apply(_.either(_.eqBy(_.prop('mom')), _.eqBy(_.prop('dad'))));

const sibling_pairs = people =>
	_.map(pair => _.map(_.prop('name'), pair),
	  _.filter(pair_has_common_parent,
	    _.filter(_.apply(_.complement(_.equals)),
	      cartesian_square(people))));

console.log(sibling_pairs(data));

// You can use the currying nature of iterators to write even more
// cryptic code, yay.

const sibling_pairs2 = 
	_.compose(
		_.map(_.map(_.prop('name'))),
		_.filter(pair_has_common_parent),
		_.filter(_.apply(_.complement(_.equals))),
		cartesian_square);

console.log(sibling_pairs2(data));

