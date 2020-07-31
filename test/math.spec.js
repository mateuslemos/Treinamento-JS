const assert = require('assert');
const Math = require('../src/math.js');

let value = 1;

//Hooks do Mocha
beforeEach(function () {
    value = 1;
});

describe('Math class', function(){
  it('Soma dois números', function(){
      const math = new Math();
      let result = math.sum(5, 5);
      assert(result, 10);
  });

    it('Soma três números', function (done) {
        const math = new Math();
        let result = math.sumThreeNumbers(5, 3, value, (value) => {
            assert.equal(value, 9);
            done();
        });
    });

    it('Multiplica dois números');

    it.only('Divide dois números', function () {
        value = 2;
        let NUMBER2 = 2;

        let result = NUMBER2 / value;

        assert.equal(result, 1);
    });

    it.skip('Subtrai dois numeros', function () {
        let NUMBER2 = 2;

        let result = NUMBER2 - value;

        assert.equal(result, 1);
    });
});