const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('4-sendPaymentRequestToApi function test', function () {
  it('Check function call and arguments', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 10);

    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 10)).to.be.true
    expect(stub('SUM', 100, 10)).to.equal(10);
    expect(spy.calledWith('The total is: 10')).to.be.true;
    stub.restore();
    spy.restore();
  });
});
