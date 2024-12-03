const { expect } = require('chai');
const request = require('request');

describe('Test a route using request and chai', function () {
  it('should return 200 as status code', function () {
    request('http://localhost:7865/', (err, res, body) => {
      expect(err).to.equal(null);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
    });
  });
});
