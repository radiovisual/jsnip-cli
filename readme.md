# jsnip [![Build Status](https://travis-ci.org/radiovisual/jsnip.svg?branch=master)](https://travis-ci.org/radiovisual/jsnip)

> Get common JavaScript code snippets.

:hamburger: This is my WIP snippet library where you can get common JS code snippets
from the command line. You have the option to customize the snippet or output
the snippet to the system clipboard.

**Note:** The React snippets are currently in a React Native flavor and that the
JavaScript is intended to reflect the ES2015 (ES6) syntax. The snippets are all
linted according to the AirBnB Style.

## Install

Install the cli to use on the command line
```
$ npm install --global jsnip
```

Or, you can install and use it within your node projects / build routines

```
$ npm install --save jsnip
```


## Usage

From the cli:

```
$ jsnip class -c -n MyClass
```

Or from Node.js:

```js
const jsnip = require('jsnip');
jsnip('reducer');
```

## API

### jsnip(input, [options])

#### input

Type: `string`

The name of the code snippet you want to print. Click the link to see the actual
snippet file.

| input | Description |
| ------| -----------|
| [function](snippets/react-function.js)   | A functional React component. |
| [class](snippets/react-class.js)       | A class-based React component. |
| [action](snippets/redux-actions.js)     | A Redux action snippet. |
| [reducer](snippets/redux-reducer.js)     | A Redux reducer snippet. |
| [lorem](snippets/lorem.txt)     | 3 paragraphs of lorem ipsum text. |

#### input

Type: `object`  

Possible options are:

| Name | Description |
| ------| -----------|
| `-c, --copy`   | Copy the output to the system clipboard |
| `-n, --name`      | Specify the function or class name to use in the output |

## CLI

```
$ npm install --global jsnip
```

```
$ jsnip --help

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
```

## Contribution

Currently this module is for my own productivity, so I won't be accepting Pull
Requests that try to impose specific styles or opinions. However I will accept Pull
Requests that aim to populate the snippet library with useful goodies. :hamburger:

## License

MIT © [Michael Wuergler](http://numetriclabs.com)
