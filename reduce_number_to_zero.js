var numberOfSteps = function (num) {
  let steps = 0;
  if (i == 0) {
    return steps;
  }
  while(i>0){
    if(i%2){
        i/=2
      }else{
        i--
      }
      steps++
  }
 return steps
};
// Time complexity is O(logn) number of steps we take depend on the amount of halfs we have in our variable
// space complexity is constant as we are not creating any dat structures propotional to size 