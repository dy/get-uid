var getUid = require('./');
var assert = require('assert');

assert.ok(getUid());
assert.ok(typeof getUid() === 'number');
assert.notEqual(getUid(), getUid());