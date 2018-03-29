'use strict'

module.exports = {

Animal: function(name, cry,type){
      if(!arguments.length){
        this.name = "Animal";
        this.cry = "Cry";
      } else if (arguments.length == 2) {
        this.name = name;
        this.cry = cry;
      }else{
        this.name = name;
        this.cry = cry;
        this.type = type;
      }

      if((this.name == "Chicken") || (this.name == "Bird")){
        this.numOfLegs = 2;
      } else{
        this.numOfLegs = 4;
      }

      this.walk = function(n) {
        if (this.name == "Chicken") {
          this.fly == (n * 4)+" m";
        }

        if(this.name == "Bird"){
          this.fly = n * 50+" km";
        }



      };



  },

}
