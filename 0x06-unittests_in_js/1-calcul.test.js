const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('1-calculateNumber test', function () {
  it('Check equality', function () {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.equal(calculateNumber('SUBTRACT', 1.4, 5.5), -5);
    assert.equal(calculateNumber('DIVIDE', 1.3, 4.6), 0.2);
    assert.equal(calculateNumber('DIVIDE', 6.4, 0), 'Error');
  });
});
