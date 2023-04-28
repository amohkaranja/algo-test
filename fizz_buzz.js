var fizzBuzz = function (n) {
  const outputholder = [];
  for (i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      outputholder.push("FizzBuzz");
    } else if (i % 5 == 0) {
      outputholder.push("buzz");
    } else if (i % 3 == 0) {
      outputholder.push("fizz");
    } else {
      outputholder.push(i.toString());
    }
  }
  return outputholder;
};

var result = fizzBuzz(100);
console.log(result);
