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
  while (sorted != true) {
    var sorted = true;
    for (var i = 0; i < arr.length-1; i++) {
      if (arr[i] > arr[i+1]) {
        var tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
        sorted = false;
      };
    };
  };
};

var mergeSort = function(arr) {
  var l = arr.length;
  // console.log("length is " + l);
  if (l < 2) {
    return arr;
  } else {
    var left = mergeSort(arr.slice(0, Math.floor(l/2)));
    var right = mergeSort(arr.slice(Math.floor(l/2), l));
    // console.log("LEFT");
    // console.log(left);
    // console.log("RIGHT");
    // console.log(right);
    return merge(left, right);
  };
};

function merge(left, right)
{
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

// var merge = function(arr1, arr2) {
//   var p1 = 0;
//   var p2 = 0;
//   var new_arr = [];
//   while (p1 < arr1.length && p2 < arr2.length) {
//     if (arr1[p1] < arr2[p2]) {
//       new_arr.push(arr1[p1]);
//       p1 += 1;
//     } else {
//       new_arr.push(arr2[p2]);
//       p2 += 1;
//     };
//   };
//   if (p1 === arr1.length) {
//     new_arr.concat(arr2.slice(p2));
//   } else {
//     new_arr.concat(arr1.slice(p1));
//   };
//   return new_arr;
// }

var arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]



var quickSort = function(arr, lo, hi) {
  if (lo < hi) {
    var p = partition(arr, lo, hi);
    quickSort(arr, lo, p - 1);
    quickSort(arr, p + 1, hi);
  }
}

var partition = function(arr, lo, hi) {
  var pivot = arr[hi];
  var i = lo;
  for (var j = lo; j <= (hi - 1);j++) {
    if (arr[j] <= pivot) {
      var swap = arr[j];
      arr[j] = arr[i];
      arr[i] = swap;
      i++;
    };
  };
  var swap = arr[i];
  arr[i] = arr[hi];
  arr[hi] = swap;
  return i;
}


function Roulette( total ) {
  this.total = total,
  this.bankroll = function() {
    console.log("You now have $" + this.total);
  },
  this.spin = function(bet, number) {
    var output = Math.floor(Math.random() * 38) + 1;
    switch(output) {
      case 37:
        output = "0"
        break;
      case 38:
        output = "00"
        break;
      default:
        break;
    };

    if (number === "Odd" && output % 2 != 0)      ||
       (number === "Even" && output % 2 === 0))   ||
       ((number === "1 to 18")  && (output < 19)) ||
       ((number === "19 to 36") && (output > 18 && output < 37)){
      this.winAmount(1, output, bet);
    } else if ((number === "1st 12")   && (output < 13))                ||
              ((number === "19 to 36") && (output > 18 && output < 37)) ||
    } else if ((number === "19 to 36") && (output > 18 && output < 37)) {
      this.winAmount(2, output, bet);
    } else if (number === output) {
      this.winAmount(34, output, bet);
    } else {
      this.total -= bet;
      console.log(this);
      console.log("You Lose, the spin was " + output + "!!!");
      this.bankroll();
    };
  },
  this.buyIn = function( amount ) {
    this.total += amount;
  },
  this.winAmount = function( odds, output, bet ) {
    this.total += bet * odds;
    console.log("You win $" + bet * (odds + 1) + ", the spin was " + output + "!!!");
    this.bankroll();
  }
};

r = new Roulette( 100 );  // starting bankroll $100
r.spin( 10, 24 );         // bet 10 on 24
// You Win $350, the spin was 24!!!
// You now have $440.
r.spin( 50, 13 );
// You Lose, the spin was 11 :(
// You now have $390
r.bankroll();
// You now have $390
r.buyIn( 1000 );
// You bought in $1000
// You now have $1390






