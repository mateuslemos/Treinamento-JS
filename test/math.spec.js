const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function(){
  it('Soma dois números', function(){
      const math = new Math();
      let result = math.sum(5, 5);
      assert(result, 10);
  });

    it('Soma três números', function (done) {
        const math = new Math();
        let result = math.sumThreeNumbers(5, 3, 1, (value) => {
            assert.equal(value, 9);
            done();
        });
    });

    it('Multiplica dois números');

    it.only('Divide dois números', function () {
        let NUMBER1 = 1;
        let NUMBER2 = 2;

        let result = NUMBER2 / NUMBER1;

        assert.equal(result, 2);
    });

    it.skip('Subtrai dois numeros', function () {
        let NUMBER1 = 1;
        let NUMBER2 = 2;

        let result = NUMBER2 - NUMBER1;

        assert.equal(result, 1);
    });
});