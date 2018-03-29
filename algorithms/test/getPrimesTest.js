'use strict';
var expect    = require("chai").expect;
var getPrimes = require('../labs.js').getPrimes;

describe('GetPrimes ', function () {

    // Test if input to GetPrimes is an integer
    describe('argument', function () {
        it('should return invalid argument for " " ', function () {
          expect(getPrimes("")).to.equal("Invalid Argument");
        });
        it('should return invalid argument for [] ', function () {
          expect(getPrimes([])).to.equal("Invalid Argument");
        });
        it('should return invalid argument for {}',function(){
          expect(getPrimes({})).to.equal("Invalid Argument");
        });
        it('should return requires an integer argument for getPrimes()',function(){
          expect(getPrimes()).to.equal("Invalid Argument");
        });
        it('should return invalid argument for undefined',function(){
          expect(getPrimes(undefined)).to.equal("Invalid Argument");
        });
        it('should return invalid argument for numbers in string',function(){
          expect(getPrimes("20")).to.equal("Invalid Argument");
        });
    });

    //Test if input to GetPrimes outputs
    describe('results', function () {
        it('should return [2,3,4] for getPrimes(5) ', function () {
          expect(getPrimes(5)).to.eql([2, 3, 5]);
        });
        it('should return [] for getPrimes(0) ', function () {
          expect(getPrimes(0)).to.eql([]);
        });
        it('should return [2, 3, 5, 7, 11, 13, 17, 19] for getPrimes(20) ', function () {
          expect(getPrimes(20)).to.eql([2, 3, 5, 7, 11, 13, 17, 19]);
        });
        it('should return [2] for getPrimes(2) ', function () {
          expect(getPrimes(2)).to.eql([2]);
        });
        it('should return [2,3,5,7] for getPrimes(10) ', function () {
          expect(getPrimes(10)).to.eql([2,3,5,7]);
        });
        it('should return [2,3,5,7] for getPrimes(10) ', function () {
          expect(getPrimes(3)).to.eql([2,3]);
        });
    });



});
