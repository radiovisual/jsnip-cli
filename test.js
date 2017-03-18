import test from 'ava';
import execa from 'execa';

test('action', async (t) => {
  const { stdout } = await execa('./cli.js', ['action']);
  t.true(stdout.search('export default ClassName;') > -1);
});

test('reducer', async (t) => {
  const { stdout } = await execa('./cli.js', ['reducer']);
  t.true(stdout.search('export default ClassName;') > -1);
});

test('function', async (t) => {
  const { stdout } = await execa('./cli.js', ['function']);
  t.true(stdout.search('export default ClassName;') > -1);
});

test('class', async (t) => {
  const { stdout } = await execa('./cli.js', ['class']);
  t.true(stdout.search('export default ClassName;') > -1);
});

test('custom action', async (t) => {
  const { stdout } = await execa('./cli.js', ['action', '-n', 'Foo']);
  t.true(stdout.search('export default Foo;') > -1);
});

test('custom reducer', async (t) => {
  const { stdout } = await execa('./cli.js', ['reducer', '-n', 'Foo']);
  t.true(stdout.search('export default Foo;') > -1);
});

test('custom function', async (t) => {
  const { stdout } = await execa('./cli.js', ['function', '-n', 'Foo']);
  t.true(stdout.search('export default Foo;') > -1);
});

test('custom class', async (t) => {
  const { stdout } = await execa('./cli.js', ['class', '-n', 'Foo']);
  t.true(stdout.search('export default Foo;') > -1);
});

test('lorem', async (t) => {
  const { stdout } = await execa('./cli.js', ['lorem']);
  t.true(stdout.search('Lorem ipsum dolor sit amet') > -1);
});

test('reports unknown parameters', async (t) => {
  const { stdout } = await execa('./cli.js', ['foobarstuff', 'Foo']);
  t.true(stdout.search('There is no snippet by the name foobarstuff') > -1);
});
