'use strict';

// linked lists as sets, maps etc.
// this way of coding is very ill supported by Javascript!

// set(a, b, c) is represented by [a, [b, [c, []]]]
// notice result set shares its structure with input set

function set_adjoin(element, set) {
	return [element, set];
}

function set_merge(set1, set2) {
	if (!set1) return set2;
	return set_adjoin(set1[0], set_merge(set1[1], set2));
}

function is_member(element, set) {
	if (!set) return false;
	if (set[0] === element) return true;
	return is_member(element, set[1]);
}

const ex = set_merge([1,[2,[]]], [3,[2,[]]]);

console.log(is_member(3, ex), is_member(5, ex));

// { key1: val1, key2: val2} is represented as [key1, val1, [key2, val2, []]]

function associate(key, val, proplist) {
	return [key, val, proplist];
}

function lookup(key, proplist) {
	if (!proplist) return undefined;
	if (proplist[0] === key) return proplist[1];
	return lookup(key, proplist[2]);
}

const human = ["species", "human", ["height", 172, []]];
const Panu = associate("name", "Panu", associate("height", 180, human));

console.log(lookup("species", Panu));
console.log(lookup("height", Panu));

