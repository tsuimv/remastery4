const chai = require("chai");
const expect = chai.expect;

const removeEr = require('../funcs/filter')

describe('Remove ER function', function() {
    it('Should remove words that end with er and return that array', function() {
        let array = ['apple', 'better'] 
        expect(removeEr(array)).to.deep.equal(['apple'])
    })
})