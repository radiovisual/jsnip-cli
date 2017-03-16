# snip [![Build Status](https://travis-ci.org/radiovisual/snip.svg?branch=master)](https://travis-ci.org/radiovisual/snip)

> Get common JavaScript code snippets.

:hamburger: This is my WIP snippet library. Currently this module outputs static code snippets,
but soon I will implement a template system where the function or class names can be
supplied to customize the output.

Note that the React snippets are currently in a React Native flavor and that the
JavaScript is intended to reflect the ES2015 (ES6) syntax. The snippets are all
linted according to the AirBnB Style.

## Install

Install the cli to use on the command line
```
$ npm install --global snip
```

Or, you can install and use it within your node projects / build routines

```
$ npm install --save snip
```


## Usage

From the cli:

```
$ snip reducer
```

Or from Node.js:

```js
const snip = require('snip');
snip('reducer');
```

## API

### snip(input)

#### input

Type: `string`

The name of the code snippet you want to print. Click the link to see the actual
snippet file.

| input | Description |
| ------| -----------|
| [function](templates/react-function.js)   | A functional React component. |
| [class](templates/react-class.js)       | A class-based React component. |
| [action](templates/redux-actions.js)     | A Redux action snippet. |
| [reducer](templates/redux-reducer.js)     | A Redux reducer snippet. |


## CLI

```
$ npm install --global snip
```

```
$ snip --help

Usage
  $ snip [input]

Options
  action  print a redux action creator snippet
  reducer print a redux reducer snippet

Examples
  $ snip action
  $ snip reducer
```

## Contribution

Currently this module is for my own productivity, so I won't be accepting Pull
Requests that try to impose specific styles or opinions. However I will accept Pull
Requests that aim to populate the snippet library with useful goodies. :hamburger:

## License

MIT © [Michael Wuergler](http://numetriclabs.com)