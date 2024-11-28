const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber test', function () {
  it('Check equality', function () {
    assert.equal(calculateNumber(5, 4), 9);
    assert.equal(calculateNumber(5.5, 4), 10);
    assert.equal(calculateNumber(5, 4.6), 10);
    assert.equal(calculateNumber(5.5, 4.2), 10);
  });
});
