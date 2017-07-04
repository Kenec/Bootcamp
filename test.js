'use strict'
const expect    = require("chai").expect;

const Vehicle = require("./Car.js").Vehicle;
const Jeep = require("./Car.js").Jeep

const Toyota = new Vehicle("Toyota","Camry",4,"Red");
const PathFinder = new Jeep("PathFinder","2015",4,"Black",false,false);

describe('Vehicle ', function () {

    // Test if Toyota class
    describe('Toyota', function () {
        it('should be an instance of the `Vehicle` class', function () {
          expect(Toyota).to.be.an.instanceof(Vehicle);
        });
        it('should be a typeof object', function () {
          expect(typeof Toyota).to.equal(typeof {});
        });
    });

    // Test if PathFinder class
    describe('PathFinder', function () {
        it('should be an instance of the `Jeep` class', function () {
          expect(PathFinder).to.be.an.instanceof(Jeep);
        });
        it('should be a typeof object', function () {
          expect(typeof PathFinder).to.equal(typeof {});
        });
        it('should be a child of Vehicle class', function () {
          expect(PathFinder).to.be.an.instanceof(Vehicle);
        });

    });

  

});
