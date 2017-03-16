#!/usr/bin/env node
'use strict';
const meow = require('meow');
const snip = require('./');

const cli = meow(`
	Usage
	  $ snip [input]

	Options
	  action  print a redux action creator snippet
		reducer print a redux reducer snippet

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
