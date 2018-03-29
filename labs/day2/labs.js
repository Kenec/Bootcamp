'use strict'

module.exports = {
  words: function(x){
    var x_json = {};
    var x_split = x.split(/[\s\t\n]+/);
    //x_split = x.split(" ");

    for(var i = 0; i < x_split.length; i++){
      var count = 0;
        for(var x = 0; x < x_split.length; x++){
            if(x_split[i] === x_split[x]){
              count++
            }
        }
        x_json[x_split[i]] = count;
    }

    return x_json;
  },
  reverseString: function(n){
      if(n == null || n == ''){
        return null;
      } else{
         var newString = "";
         for (var i = n.length - 1; i >= 0; i--) {
             newString += n[i];
         }

         if(n === newString){
           return true;
         } else{
           return newString;
         }
      }
  }
}
