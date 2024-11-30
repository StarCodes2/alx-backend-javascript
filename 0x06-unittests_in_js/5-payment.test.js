const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('5-test using hooks', function () {
  beforeEach(function () {
    sinon.spy(console, 'log');
  });

  afterEach(function () {
    console.log.restore();
  });

  it('Check console.log call and arguments-1', function () {
    sendPaymentRequestToApi(100, 20);

    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith('The total is: 120')).to.be.true;
  });

  it('Check console.log call and argument-2', function () {
    sendPaymentRequestToApi(10, 10);

    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith('The total is: 20')).to.be.true;
  });
});
