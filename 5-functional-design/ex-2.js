'use strict';

// Object-oriented way: specialise in data types

const pi = 3.141592653589793;

function circle(radius) {
	return { area: () => pi * radius * radius };
}

function square(side) {
	return { area: () => side * side };
}

function area_sum(list) {
	return list.reduce((acc, shape) => acc + shape.area(), 0);
}

console.log(area_sum([circle(30), square(9)]));

// Functional way: specialise in arguments

const circle_area = radius => pi * radius * radius;
const square_area = side => side * side;

function area_sum2(areafn, list) {
	return list.reduce((acc, shape) => acc + areafn(shape), 0);
} // or just _.sum(_.map(areafn, list))

console.log(area_sum2(circle_area, [14, 1]));
console.log(area_sum2(square_area, [14, 1]));

