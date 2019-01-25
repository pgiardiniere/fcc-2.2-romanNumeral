"use strict";
//setup conversion data
function convertToRoman(num) {
  let roman = [
    { 'numeral': 'I',
      'value' : 1
    },
    { 'numeral': 'V',
      'value' : 5
    },
    { 'numeral': 'X',
      'value' : 10
    },
    { 'numeral': 'L',
      'value' : 50
    },
    { 'numeral': 'C',
      'value' : 100
    },
    { 'numeral': 'D',
      'value' : 500
    },
    { 'numeral': 'M',
      'value' : 1000
    }
  ]
  //sort largest to smallest numerals for easier division
  roman = roman.reverse();

  // we know going in that by the way the numerals are structured 
  // that getting a return of 5 is not possible for numbers smaller than 5000, since it would trigger a value 1 conversion
  // on the previous symbol. This also allows 'M' numeral to have no ceiling. Also, the test data does not go over 2k.

  //array to track numeral during conversion.
  const numInRoman = [];

  for (let i=0; i < roman.length; i++) {
    if (num / roman[i].value >= 4) {
      //if between 4 and 5, we push symbol of the current numeral, then push symbol of higher order numeral
      //then subtract 4 * roman[i].value from the num
      numInRoman.push(roman[i].numeral, roman[i-1].numeral)
      num -= 4*roman[i].value;
    }

    if (num / roman[i].value >= 3) {
      numInRoman.push(roman[i].numeral, roman[i].numeral, roman[i].numeral)
      num -= 3*roman[i].value;
    }

    if (num / roman[i].value >= 2) {
      numInRoman.push(roman[i].numeral, roman[i].numeral);
      num -= 2*roman[i].value;
    }

    if (num / roman[i].value >= 1) {
      numInRoman.push(roman[i].numeral);
      num -= roman[i].value;
    }
    
  }
  //toString for return
  console.log(numInRoman.join(""));
  return numInRoman.join('');
}
   
convertToRoman(36);