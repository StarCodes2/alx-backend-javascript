const { expect } = require('chai');
const request = require('request');

describe('Test a route using request and chai', function () {
  it('should return 200 as status code', function (done) {
    request('http://localhost:7865/cart/65', (err, res, body) => {
      expect(err).to.equal(null);
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 65');
      done();
    });
  });

  it('should return 404 as status code', function (done) {
    request('http://localhost:7865/cart/6y', (err, res, body) => {
      expect(err).to.equal(null);
      expect(res.statusCode).to.equal(404);
      expect(body).to.not.equal('Payment methods for cart 6y');
      done();
    });
  });
});
