const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('Testing Async code', function () {
  it('should return an object', function (done) {
    getPaymentTokenFromAPI(true).then(function (result) {
      expect(result.data).to.equal('Successful response from the API');
      done();
    }).catch(done);
  });
});
