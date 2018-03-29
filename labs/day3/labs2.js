'use strict'

module.exports = {
  toTwenty:function(){
    var twenty_elements = [];
    for(var i = 1; i < 21; i++){
        twenty_elements.push(i);
    }

    return twenty_elements;
  },
  toForty:function(){
    var forty_elements = [];
    for(var i = 1; i < 21; i++){
        forty_elements.push(i*2);
    }

    return forty_elements;
  },
  toOneThousand:function(){
    var thousand_elements = [];
    for(var i = 1; i < 101; i++){
        thousand_elements.push(i*10);
    }

    return thousand_elements;
  },
  search: function(d){
       var array = this;
       var startIndex  = 0,
        stopIndex   = array.length - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);
       var search_obj ={};
       var count = 0, index = 0, length;


       while(array[middle] != d && startIndex < stopIndex){

           //adjust search area
           if (d < array[middle]){
               stopIndex = middle - 1;
           } else if (d > middle){
               startIndex = middle + 1;
           }

           //recalculate middle
           middle = Math.floor((stopIndex + startIndex)/2);

           count++;

       }
       index = (array[middle] != d) ? -1 : middle
       search_obj["count"] = count;
       search_obj["index"] = index;
       search_obj["length"] = array.length;

       return search_obj;
  }

}
