#!/usr/bin/env node
const meow = require('meow');
const chalk = require('chalk');
const jsnip = require('./');

const rule = chalk.cyan('---------------------------------');

const cli = meow(`
  Usage
    $ jsnip [input]

  Commands
    action    Print a redux action creator snippet
    reducer   Print a redux reducer snippet
    function  Print a functional React component
    class     Print a class-based React component
    lorem     Print 3 paragraphs of lorem ipsum text

  Options
    -n, --name  Specify the name to use in the output
    -c, --copy  Copy the output to the system clipboard

  Examples
    $ jsnip action
    $ jsnip reducer
    $ jsnip class -c -n MyAwesomeClass

`, {
  alias: {
    n: 'name',
    c: 'copy',
  },
});

jsnip(cli.input[0], cli.flags)
  .then((data) => {
    if (cli.flags.c) {
      console.log('\nThe following was copied to the', chalk.yellow('clipboard'));
    }
    console.log(rule);
    console.log(data);
    console.log(rule);
  })
  .catch((err) => {
    if (err) {
      throw err;
    }
  });
