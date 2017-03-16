#!/usr/bin/env node
'use strict';
const meow = require('meow');
const snip = require('./');

const cli = meow(`
	Usage
	  $ snip [input]

	Options
	  action    Print a redux action creator snippet
		reducer   Print a redux reducer snippet
		function  Print a functional React component
		class	    Print a class-based React component

	Examples
	  $ snip action
	  $ snip reducer
`);

snip(cli.input[0])
	.then(data => {
		console.log('\n', data);
	})
	.catch(err => {
		if (err) {
			throw err;
		}
	});
