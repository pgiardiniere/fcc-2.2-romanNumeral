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
  // that getting a return of 5 is not possible, since it would trigger a value 1 conversion
  // on the previous symbol. This also allows 'M' numeral to have no ceiling


  //need to declare an empty array and assign to a variable, this will track our total numeral as it is converted
  //then in the for loop :: after the if-s, push roman[i].numeral to array
  //then modify return   :: transform array var toString & return.

  for (i=0; i < roman.length; i++) {
    if (num / roman[i].value >= 4) {
      //if between 4 and 5, we use the symbol of the current numeral and concatenate the numeral of the higher order after
      //we subtract 4 * roman[i].value from the num
    }

    //if (logic)
      //if >= 1 and strictly less than 4, we use between 1 and 3 of the current numeral 
      //subtract 4 * (between 1 and 3) * roman[i].value

    
  }

  return num;
}
   
convertToRoman(36);