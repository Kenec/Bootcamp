/*
You are to create a Car class that can be used to instantiate various vehicles.
It takes in arguments that depict the type, model, and name of the vehicle, provided they are set.
Let the test guide you to building your Car boiler-plate.
```
*/
//(function(){
  'use strict';

  var Animal = require('../labs.js').Animal;

  describe("Animal Class: Create an animal, make it walk", function() {

    it("The animal should be a type of `object`, and an instance of the `Animal` class", function() {
      var cow = new Animal('Cow');
      expect(typeof cow).toEqual(typeof {});
      expect(cow instanceof Animal).toBeTruthy();
    });

    it("The Animal should be called 'Animal' if no name is passed as a parameter", function() {
      var animal = new Animal();
      expect(animal.name).toEqual('Animal');
      expect(animal.cry).toBe('Cry');
    });

    it("The Animal name and cry should be a property of the animal", function() {
      var goat  = new Animal('Goat', 'Bleats');
      expect(goat.name).toBe('Goat');
      expect(goat.cry).toBe('Bleats');
    });

    it("The animal shoud have four (4) legs except its a chicken or chicken", function() {
      var dog  = new Animal('Dog', 'Barks');
      expect(dog.numOfLegs).toBe(4);

      var chicken = new Animal('Chicken', '	pip');
      expect(chicken.numOfLegs).toBe(2);
      chicken.walk(5);
      expect(chicken.fly).toBe('20 m');
      expect((function(){return new Animal('Blackbird', 'whistle');}()).numOfLegs).toBe(2);
    });



  });
//})();
