var isPalindrome = function(x) {
    var x2 = x.toString().split('').reverse().join('');
    return (x2 == x ? true : false);
  };