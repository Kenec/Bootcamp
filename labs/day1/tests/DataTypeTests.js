/*
Compare and return results, based on the argument supplied to the function. Follow through the test to produce the perfect function that accounts for all expectations.
* For strings, return its length.
* For null or undefined return string 'no value'
* For booleans return the boolean
* For numbers return a string showing how it compares to hundred e.g. For 67 return 'less than 100' for 4034 return 'more than 100' or equal to 100 as the case may be
* For arrays return the 3rd index, or undefined if it doesn't exist.
* For functions call the function and pass in true as an argument and return it.
*/
'use strict';

var dataTypes = require('../labs.js').dataTypes;


describe("Data types tests ", function() {
  describe("Case for some falsy values", function() {

    it("should return 'no value' for null", function() {
      expect(dataTypes(null)).toEqual('no value');
    });

    it("should return 'no value' for undefined", function() {
      expect(dataTypes(undefined)).toEqual('no value');
    });

  });

  describe("Case for booleans", function() {

    it("should return true for `true`", function() {
      expect(dataTypes(true)).toBe(true);
    });

    it("should return false for `false`", function() {
      expect(dataTypes(false)).toBe(false);
    });

  });

  describe("Case for Numbers", function() {

    it("should return 'less than 100' for 44", function() {
      expect(dataTypes(44)).toBe('less than 100');
    });

    it("should return 'more than 100' for 144", function() {
      expect(dataTypes(144)).toBe('more than 100');
    });

    it("should return 'equal to 100' for 100", function() {
      expect(dataTypes(100)).toBe('equal to 100');
    });


  });

  describe("Case for Strings", function() {

    it("should return the length of `tergiversate`", function() {
      expect(dataTypes('tergiversate')).toBe(12);
    });

    it("should return the length of an empty string", function() {
      expect(dataTypes('')).toBe(0);
    });

    it("should return the length of `555`", function() {
      expect(dataTypes('555')).toBe(3);
    });

  });

  describe("Case for arrays", function() {

    it("should return `2` for `[0, 1, 2]`", function() {
      expect(dataTypes([0, 1, 2])).toBe(2);
    });

    it("should return `undefined` for `[]`", function() {
      expect(dataTypes([])).not.toBeDefined();
    });

    it("should return `undefined` for `[4, 9]`", function() {
      expect(dataTypes([4, 9])).not.toBeDefined();
    });

  });


  describe("Case for functions", function() {

    it("should call the `callback` function with argument true, and return `called callback`", function() {
      var callback = function(arg) {
        expect(arg).toBeTruthy();
        if(arg === true) {
          return 'called callback';
        }
      };
      expect(dataTypes(callback)).toBe('called callback');
    });

  });
});
