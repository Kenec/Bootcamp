'use strict';

var findMinMax = require('../labs.js').findMinMax;

describe('Min-Max Numbers in a List: ', function () {

  describe('Return the list is empty `Empty List`', function () {

      it('should return Empty List for []', function () {
        expect(findMinMax([])).toEqual("Empty List");
      });

    });

  describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

    it('should return [1,4] for [1, 2, 3 , 4]', function () {
      expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
    });

    it('should return [4, 6] for [6, 4]', function () {
      expect(findMinMax([6, 4])).toEqual([4, 6]);
    });

    it('should return [0, 1] for [0, 1]', function () {
      expect(findMinMax([0, 1])).toEqual([0, 1]);
    });

    it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
      expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
    });

    it('should return [-12, 1] for [1, -1, -12, -4, -5]', function () {
      expect(findMinMax([1, -1, -12, -4, -5])).toEqual([-12, 1]);
    });

    it('should return [-12, 0] for [0, -11, -12, -4, -5]', function () {
      expect(findMinMax([0, -11, -12, -4, -5])).toEqual([-12, 0]);
    });



  });

  describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

    it('should return [4] for [4, 4, 4, 4]', function () {
      expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
    });
    it('should return [0] for [0]', function () {
      expect(findMinMax([0])).toEqual([0]);
    });
    it('should return [0] for [0, 0, 0, 0, 0]', function () {
      expect(findMinMax([0, 0, 0, 0, 0])).toEqual([0]);
    });

  });

});
