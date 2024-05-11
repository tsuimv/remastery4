const chai = require("chai");
const expect = chai.expect;

const reverse = require('../funcs/arrayfunc')

describe('Reverse function', function() {
    it('Should return the given array in reverse', function() {
        let array = ['apple', 'pear'] 
        expect(reverse(array)).to.deep.equal(['pear', 'apple'])
    })
})