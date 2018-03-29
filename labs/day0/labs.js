'use strict'

module.exports = {

    findMinMax: function (arr) {

      if(arr.length == 0){
        return "Empty List";
      } else{
         var minMax = [];
         var tempMaxHolder = 0;
         var tempMinHolder = arr[0];

         for (var i = 0; i < arr.length; i++ ){
           if (tempMaxHolder < arr[i]){
             tempMaxHolder = arr[i];
           }
           if(tempMinHolder > arr[i]){
              tempMinHolder = arr[i]
           }
         }

         if(tempMinHolder == tempMaxHolder){
           minMax.push(tempMinHolder);
         } else{
           minMax.push(tempMinHolder)
           minMax.push(tempMaxHolder)
         }
  	     return minMax;
      }
    },

    fizzBuzz: function (n) {
        var message;
        if ((n%3 == 0) && (n %5 == 0)){
          message = "FizzBuzz";
        } else if (n%3 == 0) {
          message = "Fizz";
        } else if(n % 5 == 0){
          message = "Buzz";
        } else {
          message = n;
        }
	       return message;
    },

    aritGeo: function (arr) {
         var diff = arr[1] - arr[0];
         var ratio = arr[1] / arr[0];

         var arithmetic = true;
         var geometric = true;

         var arr_length = arr.length -1;
         var message;

         if (arr.length == 0){
           message = 0;
         } else{
           for (var i = 0; i < arr_length; i++){
              if((arr[i+1] - arr[i]) !== diff){
                arithmetic = false;
              }
              if((arr[i+1] / arr[i]) !== ratio){
                geometric = false;
              }
           }

           if(arithmetic === true){
              message = "Arithmetic";
           } else if(geometric === true){
              message = "Geometric";
           } else {
             message = -1;
           }
         }
	       return message;
       }
}
