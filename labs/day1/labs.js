'use strict'

module.exports = {
  dataTypes: function(n){
    if( (typeof(n) == undefined ) || (n == null)){
        return "no value";
    } else if(typeof(n) == 'boolean'){
        return n.valueOf();
    } else if( typeof(n) == 'number'){
      if(n < 100){
        return "less than 100";
      } else if(n > 100){
        return "more than 100";
      } else if(n == 100){
        return "equal to 100";
      }
    } else if( typeof(n) == 'string'){
        return n.length;
    } else if( n instanceof Array){
    if(n.length < 3){
        return undefined;
    } else{
        return n.length - 1;
    }
    } else if(typeof n == "function"){
        return n(true);
    }
  },
  getPrimes: function(n){
    if( (typeof(n) == undefined ) || (n == null)){
       return "no value";
   } else if(typeof(n) !== 'number'){
       return "argument is not an integer";
   } else {
     if(n < 1){
         return "less than 1";
     } else{
         var primeArray = [];
         if(n === 2){
            primeArray.push(2);
         } else{
            outer:for (var i = 2; i<=n; i++){
             for(var count = 2; count < i; count++){
               if(i%count === 0){
                continue outer;
               }
             }
               primeArray.push(i);
           }
         }
       return primeArray;
     }
   }

  }
}
