'use strict'

class Vehicle{
    //constructor
    constructor(name,model,noOfTire,color){
      this.name = name
      this.model = model;
      this.noOfTire = noOfTire;
      this.color = color;
      this.speed = 0;
      this.gear = 0;
      this.position = 0;
      console.log("\nCar Name: "+name+"\nModel: "+model+"\nnoOfTire: "+noOfTire+"\nColor: "+ color);
    }
    //show current car statistics
    carStat(){
      console.log("\nSTAT \nSpeed: "+this.speed+" MPH"+"\nGear:"+this.gear+"\nPosition:"+this.position);
    }
    //acceralating
    acceralate(){
      if((this.gear !== 0) && (this.gear !== 6)){
        this.speed = this.speed + 2;
        this.position = this.position + 3;
      } else{
        this.changeForwardGear();
        this.speed = this.speed + 2;
        this.position = this.position + 3;
      }
    }
    //decelerate
    decelerate(){
      if((this.speed > 0) && (this.gear >= 1)){
        this.speed = this.speed - 2;
        this.position = this.position - 3;
      }
    }
    //reverse
    moveBack(){
      if((this.speed <= 0) && (this.gear == 6)){
        this.speed = this.speed - 2;
        this.position = this.position - 3;
      } else {
        this.applyBreak();
        this.speed = this.speed - 2;
        this.position = this.position - 3;
      }
    }
    //decelerate
    applyBreak(){
      if(this.speed !== 0){
        this.speed = 0;
        this.gear = 0;
        this.position = 0;
      }
    }
    //change Forward gear
    changeForwardGear(){
      if((this.gear >= 0) &&(this.gear <5)){
        this.gear = this.gear + 1;
      } else{
        this.gear = 1;
      }
    }
    //change to reverse gear
    changeBackwardGear(){
      if(this.speed == 0){
        this.gear = 6;
      } else {
        this.applyBreak();
        this.gear = 6;
      }
    }

  }
  class Jeep extends Vehicle {
    constructor(name,model,noOfTire,color,bulletProof,fourWheel) {
      super(name,model,noOfTire,color);
      this.bulletProof = bulletProof;
      this.fourWheel = fourWheel;
      this.engine = "v6";
      console.log("BulletProof: "+this.bulletProof+"\nFourWheel: "+this.fourWheel+"\nEngine: "+this.engine);
    }

    //acceralating
    acceralate(){
      if((this.gear !== 0) && (this.gear !== 6)){
        this.speed = this.speed + 5;
        this.position = this.position + 7;
      } else{
        super.changeForwardGear();
        this.speed = this.speed + 5;
        this.position = this.position + 7;
      }
    }

  }
module.exports = {
  Vehicle: Vehicle,
  Jeep: Jeep
}
