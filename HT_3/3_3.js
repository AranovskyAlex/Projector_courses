function recursiveOddSumTo(number) {
  if (number < 1) {
    return 0;
  } else if (number % 2 === 0) {
    return recursiveOddSumTo(number - 1);
  } else {
    return number + recursiveOddSumTo(number - 2);
  }
}

console.log(recursiveOddSumTo(50));


function iterativeOddSumTo(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 2) {
    sum += i;
  }
  return sum;
}

console.log(iterativeOddSumTo(number));



