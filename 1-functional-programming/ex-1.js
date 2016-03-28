'use strict';

const pi = 3.141592653589793;

// functional-ish (modulo console.log)
let square = num => num * num;
let circle_area = radius => pi * square(radius);
console.log([3, 5].map(circle_area));

// imperative-ish
var areas = [];
function add_circle_area(radius) {
	let area = radius;
	area *= radius;
	area *= pi;
	areas.push(area);
}
add_circle_area(3);
add_circle_area(5);
console.log(areas);

