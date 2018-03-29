'use strict'

module.exports = {

    getPrimes: function (n) {
        if(Number.isInteger(n)){
          var primes = [], num, divisor;
          outerLoop: for( num = 2 ; num <= n ; num++ ) {
            for( divisor = 2 ; divisor < num ; divisor++ ) {
              if( num % divisor === 0 ) {
                continue outerLoop;
              }
            }
            primes.push(num);
          }
          return primes;
        } else{
          return "Invalid Argument";
        }
    }
}
