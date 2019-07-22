const assert = require('assert');
const wscore = require('../index');
const { properties } = wscore.context;

properties.add('test', { this: "that" });
assert.strictEqual(true, typeof properties.get('test') === 'object');
assert.strictEqual('that', properties.get('test').this);
assert.strictEqual('{"this":"that"}', properties.get('test').toString());

let test = properties.get('test');
test.this = 'Something else';
assert.strictEqual('Something else', properties.get('test').this);
assert.strictEqual('{"this":"Something else"}', properties.get('test').toString());

properties.add('test', { field: 'value' });

assert.strictEqual(true, typeof properties.get('test1') === 'string');
assert.strictEqual('value', properties.get('test1'));

assert.strictEqual(true, typeof properties.get('test2') === 'object');
assert.strictEqual('value', properties.get('test2').field);
assert.strictEqual('{"field":"value"}', properties.get('test2').toString());
