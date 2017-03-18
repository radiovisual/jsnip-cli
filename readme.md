# jsnip-cli [![Build Status](https://travis-ci.org/radiovisual/jsnip-cli.svg?branch=master)](https://travis-ci.org/radiovisual/jsnip-cli)

> Get common JavaScript code snippets from the command line.

:hamburger: This is my WIP snippet library where you can get common JS code snippets
from the command line. You have the option to customize the snippet or send
the snippet to the system clipboard.

**Note:** The React snippets are currently in a React Native flavor and the
JavaScript is intended to reflect the ES2015 (ES6) syntax.

If you want to get these snippets in Node, check out the API for this module: [jsnip](https://github.com/radiovisual/jsnip).

## Install

Install the cli to use on the command line
```
$ npm install --global jsnip
```

## Usage

Examples from the cli (both lines to the same thing):

```
$ jsnip class --copy --name MyClass
$ jsnip class -c -n MyClass
```

## CLI

```
$ jsnip --help

Usage
  $ jsnip [command] [options]

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
```

## Contribution

Currently this module is for my own productivity, so I won't be accepting Pull
Requests that try to impose specific styles or opinions. However I will accept Pull
Requests that aim to populate the snippet library with useful goodies. :hamburger:

## Related

- [jsnip](https://github.com/radiovisual/jsnip): The API for this module.

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
