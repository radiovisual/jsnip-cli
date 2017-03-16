#!/usr/bin/env node
const meow = require('meow');
const jsnip = require('./');

const cli = meow(`
  Usage
    $ jsnip [input]

  Options
    action    Print a redux action creator snippet
    reducer   Print a redux reducer snippet
    function  Print a functional React component
    class     Print a class-based React component

  Examples
    $ jsnip action
    $ jsnip reducer
`);

jsnip(cli.input[0])
  .then((data) => {
    console.log('\n', data); // eslint-disable-line no-console
  })
  .catch((err) => {
    if (err) {
      throw err;
    }
  });
