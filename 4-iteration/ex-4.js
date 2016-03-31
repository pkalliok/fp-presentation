'use strict';

// A glob is a string pattern:
// '*' matches any substring
// '?' matches any single character
// other characters only match themselves.

function glob_matches(glob, string) {
	if (!glob && !string) return true;
	if (!glob) return false;
	if (!string) return glob === '*';
	if (glob[0] === '*')
		return glob_matches(glob, string.substr(1)) ||
			glob_matches(glob.substr(1), string);
	if (glob[0] === '?' || glob[0] === string[0])
		return glob_matches(glob.substr(1), string.substr(1));
	return false;
}

console.log(['', 'nazzz', 'foo', 'bar', 'baz', 'baquz']
		.map(str => glob_matches('?a*z', str)));

