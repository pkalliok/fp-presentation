'use strict';
const _ = require('ramda');

// HTML element is represented by an array: [ "tag", {attributes}, content... ]

const html = ["html", {}, ["head", {}, ["title", {}, "An example document"]],
      			  ["body", {}, ["p", {}, "Some content"],
			  		["p", {}, "More content"]]];

// totally ok to return parts of the tree if they're not ever supposed
// to be modified
function subelements_by_tag(tag, element) {
	if (!_.isArrayLike(element)) return [];
	if (element[0] === tag) return [element];
	return _.chain(_.partial(subelements_by_tag, tag), element.slice(2));
}

console.log(subelements_by_tag("p", html));

// can construct new tree using parts of old one
function replace_by_path(indices, element, new_element) {
	if (indices.length === 0) return new_element;
	return _.map(index => index === indices[0] ?
			replace_by_path(_.tail(indices), element[index], new_element) :
			element[index],
		_.range(0, element.length));
}

// change the tag of first paragraph to header
console.log(replace_by_path([3, 2, 0], html, "h1"));

