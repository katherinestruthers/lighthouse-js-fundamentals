function range(start, end, step) {
  const arr = [];

  if (start === undefined || end === undefined || step === undefined || step <= 0) {
    return arr;
  }

  for (start; start <= end; start += step) {
    arr.push(start);
  }

  return arr;
}

// testing valid inputs
console.log(range(0, 8, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

// testing invalid inputs
console.log(range(0, 2));
console.log(range(2, 1, 1));
console.log(range(10, 30, -1));