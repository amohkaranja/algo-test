/**
 * @param {string} s
 * @return {number}
 */
 //In JavaScript, there are six falsy values: false, 0, '' (empty string), null, undefined, and NaN. All other values are considered truthy.
 var romanToInt = function(s) {
    const romanValues = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let result = 0;
    let i = 0;
  
    while (i < s.length) {
      const currentSymbol = s[i];
      const currentValue = romanValues[currentSymbol];
      const nextSymbol = s[i+1];
      const nextValue = romanValues[nextSymbol];
  
      if (nextValue && nextValue > currentValue) {
        result += nextValue - currentValue;
        i += 2;
      } else {
        result += currentValue;
        i++;
      }
    }
  
    return result;
  };