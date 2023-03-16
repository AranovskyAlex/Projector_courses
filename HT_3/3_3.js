function recursiveOddSumTo(number) {
  if (number == 1)
    return 1;
  if (number % 2 == 1)
    return (recursiveOddSumTo(number - 1) + number);
  
  return (recursiveOddSumTo(number - 1))
};
console.log(recursiveOddSumTo(1)) // 1
console.log(recursiveOddSumTo(10)) // 25
