
let number = 100;

function itFunction(num) {
  if (num < 4) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (num % i === 0) {
      return true;
    }
  }
  return false;
}

for (let i = 2; i <= number; i++) {
  if (itFunction(i)) {
    let sum = 0;
    for (let j = 1; j < i; j++) {
      if (i % j === 0) {
        sum += j;
      }
    }
    if (sum > 1 && sum < i) {
      console.log(i);
    }
  }
}