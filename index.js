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

  //array to track numeral during conversion.
  //split num's individual digits into an array of digits
  const numInRoman = [];
  const arrNum = num.toString().split("").map(Number);
  console.log(arrNum);

  for (let i=0; i < arrNum.length; i++) {
    //edge cases for 9s - ones, tens, hundreds
    //nice! finally think I have the EQ. I'll comment out the second two to test it.
    console.log(i);
    console.log(roman[i].numeral);
    console.log(i*2);
    console.log(roman[i*2].numeral);
    console.log(i*2+2);
    console.log(roman[i*2+2].numeral + '\n');
    //okay so the transposition is behaving as expected

    if (arrNum[i] === 9) numInRoman.unshift(roman[i*2].numeral, roman[i*2+2].numeral);
    if (arrNum[i] === 8) numInRoman.unshift(roman[i*2+1].numeral, roman[i*2].numeral, roman[i*2].numeral, roman[i*2].numeral);
    if (arrNum[i] === 7) numInRoman.unshift(roman[i*2+1].numeral, roman[i*2].numeral, roman[i*2].numeral);
    if (arrNum[i] === 6) numInRoman.unshift(roman[i*2+1].numeral, roman[i*2].numeral);
    if (arrNum[i] === 5) numInRoman.unshift(roman[i*2+1].numeral);
    if (arrNum[i] === 4) numInRoman.unshift(roman[i*2].numeral, roman[i*2+1].numeral);
    if (arrNum[i] === 3) numInRoman.unshift(roman[i*2].numeral, roman[i*2].numeral, roman[i*2].numeral);
    if (arrNum[i] === 2) numInRoman.unshift(roman[i*2].numeral, roman[i*2].numeral);
    if (arrNum[i] === 1) numInRoman.unshift(roman[i*2].numeral);
  }
  console.log(numInRoman);
  console.log(numInRoman.join(''));
  return numInRoman.join('');
}
   
convertToRoman(99);