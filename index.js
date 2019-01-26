"use strict";
//setup conversion data
function convertToRoman(num) {
  let roman = [
    { 'numeral': 'I',
      'val' : 1
    },
    { 'numeral': 'V',
      'val' : 5
    },
    { 'numeral': 'X',
      'val' : 10
    },
    { 'numeral': 'L',
      'val' : 50
    },
    { 'numeral': 'C',
      'val' : 100
    },
    { 'numeral': 'D',
      'val' : 500
    },
    { 'numeral': 'M',
      'val' : 1000
    }
  ]
  //sort largest to smallest numerals for easier division
  //roman = roman.reverse();

  //don't believe these are necessary - tracks Num in an Array format
  //const arrNum = num.toString().split("").map(Number);
  //console.log(arrNum);


  //array to track numeral during conversion.
  const numInRoman = [];

  for (let i=roman.length-1; i > -1; i--) {
    console.log(numInRoman);
    //handles special case of 9s
    //push symbol of the current numeral, then push symbol of twice higher order numeral
    
    if (num / roman[i].val >= 4 && num % (9*roman[i].val) === 0) {
      numInRoman.push(roman[i].numeral, roman[i+2].numeral);
      num -= 9*roman[i].val;
    }
    
    //handles special case of 4s
    //push symbol of the current numeral, then push symbol of next higher order numeral
    else if (num / roman[i].val >= 4) {
      numInRoman.push(roman[i].numeral, roman[i+1].numeral);
      num -= 4*roman[i].val;
    }

    if (num / roman[i].val >= 3) {
      numInRoman.push(roman[i].numeral, roman[i].numeral, roman[i].numeral)
      num -= 3*roman[i].val;
    }

    if (num / roman[i].val >= 2) {
      numInRoman.push(roman[i].numeral, roman[i].numeral);
      num -= 2*roman[i].val;
    }

    // && operation is to ensure if value is a 9 that we skip this numeral order
    //setup a floor function evaluator for it to work
    //this whole thing is so ugly make this pretty later...
    let x = 100; 
    if (i === 2) x=10;
    if (i === 0) x=1;
    let numFloored = Math.ceil((num+1)/x*x);

    if (num / roman[i].val >= 1 && (numFloored / roman[i].val === 4 || numFloored === 40 || numFloored ===400)) {
      numInRoman.push(roman[i].numeral);
      num -= roman[i].val;
      console.log(numInRoman);
    }
    
  }
  //toString for return
  console.log(numInRoman.join(""));
  return numInRoman.join('');
}
   
convertToRoman(9);