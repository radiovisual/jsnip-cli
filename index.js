const fs = require('fs');
const path = require('path');
const pify = require('pify');

module.exports = (input) => {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`);
  }

  const snippets = {
    action: 'redux-actions.js',
    reducer: 'redux-reducer.js',
    function: 'react-function.js',
    class: 'react-class.js',
  };

  if (!snippets[input]) {
    return Promise.resolve(`There is no snippet by the name ${input}`);
  }

  const filepath = path.join('templates', snippets[input]);
  return pify(fs.readFile)(filepath, 'utf8');
};
