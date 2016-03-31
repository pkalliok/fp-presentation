'use strict';

// Imperatiivinen: "luvun n kertoman saa siten, että käydään läpi luvut 1..n,
// ja kerrotaan ykkönen niillä kaikilla"

function fact0(n) {
	let result = 1;
	for ( let i = 1; i <= n; i++ ) {
		result *= i;
	}
	return result;
}

console.log(fact0(6));

// Funktionaalinen taas kertoo, mitä on lopputulos

const _ = require('ramda');

// "nollan kertoma on 1; muiden lukujen n kertoma on n * kertoma(n-1)"

const fact1 = n => n === 0 ? 1 : n * fact1(n-1);

console.log(fact1(6));

// "luvun n kertoma on tulo luvuista 1..n"

const fact2 = n => _.product(_.range(1,n+1));

console.log(fact2(6));

// "kertoma on yhdistelmä numeroiden luettelusta ja kertolaskusta" 

const fact3 = _.compose(_.product, _.range(1), _.inc);

console.log(fact3(6));

