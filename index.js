const handlebars = require('handlebars');
const clipboard = require('clipboardy');
const actionSnip = require('./snippets/redux-actions');
const functionSnip = require('./snippets/react-function');
const classSnip = require('./snippets/react-class');
const loremSnip = require('./snippets/lorem');
const reducerSnip = require('./snippets/redux-reducer');

module.exports = (input, opts) => {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`);
  }

  const options = opts || {};

  if (!options.name) {
    options.name = 'ClassName';
  }

  const snippets = {
    action: actionSnip,
    reducer: reducerSnip,
    function: functionSnip,
    class: classSnip,
    lorem: loremSnip,
  };

  if (!snippets[input]) {
    return Promise.resolve(`There is no snippet by the name ${input}`);
  }

  const template = handlebars.compile(snippets[input]);
  const result = template(options);

  if (options.copy) {
    clipboard.writeSync(result);
  }

  return Promise.resolve(result);
};
