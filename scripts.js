// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){  
    // your code here
    var largest = arr[0];
    arr.forEach(function(ele) {
      if (ele > largest) {
        largest = ele;
      };
    });
    return largest;
  },
  
  reversed: function(str){  
    // your code here
    var new_str = "";
    for(var i=str.length-1; i>-1; i--) {
      new_str += str[i];
    };
    return new_str;
  },

  loudSnakeCase: function(sentence){  
    // your code here
    var striped_sentence = sentence.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var words = striped_sentence.split(" ");
    var new_sentence = "";
    words.forEach (function(ele){
      var word = ele[0].toUpperCase;
      new_sentence += ele.substring(1);
      new_sentence += "_";
    })
  },

  compareArrays: function(){ 
    // your code here (replace the return)
    return "Finish compareArrays first!" 
  },

  fizzBuzz: function(){  
    // your code here
  },

  myMap: function(){  
    // your code here
  },

  primes: function(){  
    // your code here
  },
}