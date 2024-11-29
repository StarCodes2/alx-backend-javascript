const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi function test', function () {
  it('Check function call and arguments', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 10);

    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 10)).to.be.true;

    spy.restore();
  });
});
