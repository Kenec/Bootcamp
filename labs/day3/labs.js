'use strict'

module.exports = {
  findMissing: function(arr1, arr2){
    var arr1_length = arr1.length;
    var arr2_length = arr2.length;
    var same_array = false;
    var missing_number;
    var found;

    if( (arr1_length  == 0) && (arr2_length == 0)){
        return 0;
    } else {
        if(arr1_length == arr2_length){
          for(var i = 0; i < arr1_length; i++){
              for(var x = 0; x < arr1_length; x++ ){
                  if(arr1[i] === arr2[x]){
                    same_array = true;
                  } else{
                    same_array = false;
                  }
              }
          }
          if(same_array === true){
            return 0;
          }
        } else{
          var largest;
          var smallest;
          if(arr1_length > arr2_length){
            largest = arr1;
            smallest = arr2;
          } else{
            largest = arr2;
            smallest = arr1;
          }
          largest = largest.filter(function(x) { return smallest.indexOf(x) < 0 });

          return largest[0];

        }
    }


  }

}
