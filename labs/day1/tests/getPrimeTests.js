//write your own tests {10 in number}

/*
Write a getPrimes function that takes an integer value n as argument and generates prime numbers from 0 to n with asymptotic analysis.
The generated prime numbers should be in an array. Your logic should be as efficient as possible (with minimal iterations).
*/

'use strict';

var getPrimes = require('../labs.js').getPrimes;

describe("Prime Number generation:", function (){
  describe("Case for fasly value", function(){

    it("should return for null value 'no value for null'",function(){
        expect(getPrimes(null)).toEqual("no value");
    });

    it("should return for undefined value 'no value' for undefined", function() {
      expect(getPrimes(undefined)).toEqual("no value");
    });

    it("should return for string value 'argument is not an integer'",function(){
        expect(getPrimes("")).toEqual("argument is not an integer");
    });

    it("should return for an array object 'argument is not an integer'",function(){
        expect(getPrimes([])).toEqual("argument is not an integer");
    });

    it("should return for an object type 'argument is not an integer'",function(){
        expect(getPrimes({})).toEqual("argument is not an integer");
    });

  });
  describe("Case for number less than 1", function(){
    it("should return for numbers less than 1'value is less than 1'", function(){
        expect(getPrimes(-1)).toBe('less than 1');
    });
    it("should return for numbers less than 1'value is less than 1'", function(){
        expect(getPrimes(0)).toBe('less than 1');
    });
  });

  describe("Case for number greater than 1", function(){
    it("should return [2] for '2'", function(){
        expect(getPrimes(2)).toEqual([2]);
    });
    it("should return [2,3] for '3' ", function(){
        expect(getPrimes(3)).toEqual([2,3]);
    });
    it("should return [ 2, 3, 5, 7 ] for '9' ", function(){
        expect(getPrimes(9)).toEqual( [ 2, 3, 5, 7 ] );
    });
    it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ] for '50' ", function(){
        expect(getPrimes(50)).toEqual( [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ] );
    });
  });
} );
