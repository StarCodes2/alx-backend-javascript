const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('2-calculateNumber test using chai', function () {
  it('Check equality', function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUBTRACT', 1.4, 5.5)).to.equal(-5);
    expect(calculateNumber('SUBTRACT', 9.4, 5.5)).to.equal(3);
    expect(calculateNumber('DIVIDE', 1.3, 4.6)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 6.4, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 0.3, 5.5)).to.equal(0);
  });
});
