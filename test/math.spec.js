const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function(){
  it('Soma dois números', function(){
      const math = new Math();
      let result = math.sum(5, 5);
      assert(result, 10);
  });
});