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
    var upper_words = []
    words.forEach (function(ele){
      if (ele != "") {
        var cap = ele[0].toUpperCase();
        var word = cap + ele.substring(1);
        upper_words.push(word)
      };
    });
    return upper_words.join("_");
  },

  compareArrays: function(arr1, arr2){
    // your code here (replace the return)
    if (arr1.length != arr2.length) {
      return false;
    }
    else {
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
          return false;
        };
      };
    };
    return true;
  },

  fizzBuzz: function(n){
    // your code here
    var new_arr = []
    for (var i = 1; i <= n; i++) {
      if (i % 15 === 0) {
        new_arr.push("FIZZBUZZ");
      }
      else if (i % 5 === 0) {
        new_arr.push("BUZZ");
      }
      else if (i % 3 === 0) {
        new_arr.push("FIZZ");
      }
      else {
        new_arr.push(i)
      };
    };
    return new_arr
  },

  myMap: function(arr, funct){
    // your code here
    var new_arr = []
    arr.forEach (function(ele) {
      new_arr.push(funct(ele));
    });
    return new_arr;
  },

  primes: function(n){
    // your code here
    var arr = []
    if (n === 1 || n === 2) {
      return arr;
    }
    else if (n == 3) {
      return [2];
    }
    else {
      arr = [2, 3];
      for (var i = 4; i < n; i++) {
        var is_prime = true;

        for (var j = 2; j < i; j++) {
          if (i % j === 0) {
            is_prime = false;
            break;
          };
        };
        if (is_prime) {
          arr.push(i);
        };
      };
    };
    console.log(arr);
    return arr;
  },
}

var bubbleSort = function(arr) {
  var sorted = false;

  for (var i = 0; i < arr.length; i++) {
    while (sorted != true) {
    };
  };
}