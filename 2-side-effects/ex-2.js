'use strict';

// Let's say we have a "chat channel" object.  We model this as a
// channel name, topic, list of channel members, operators, and a map of
// settings.

const example = { name: '!solita',
	topic: 'Steam group luotu',
	settings: { modes: [ 's', 'k' ] },
	members: [ 'anhall', 'Jokkis', 'Scr', 'Gorith', 'Snurppa' ],
	ops: [ 'Gorith', 'Snurppa' ] }

// to enforce a layer of abstraction, we can define accessors for the
// various fields.  Whether this makes sense, depends on the nature of
// the data structure (i.e. how much it can be expected to change). e.g.

const members = channel => channel.members;
const ops = channel => channel.ops;
const topic = channel => channel.topic;

// Now, it is easy to extend the basic operations of a channel with more
// advanced operations.  Note how the code above doesn't need to know
// about the existence of this code.

const non_ops = channel =>
	members(channel).filter(mem => ! ops(channel).find(op => op === mem));

console.log(non_ops(example));

// The above code would probably be better written as:

var _ = require('ramda');
const non_ops2 = _.converge(_.difference, [members, ops]);

console.log(non_ops2(example));

// If you don't like the contract of some function, you can always make a new
// one without disturbing the users of the old one:

const members_in_det_order = channel => _.sortBy(_.identity, members(channel))

console.log(members_in_det_order(example));

