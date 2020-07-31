const objeto = require('../src/utils.js');
const expect = require('chai').expect;

describe('Utils Test', function () {
    it('Objeto tem atributo nome', function () {
        expect(objeto).to.have.property('nome');
    });
});

