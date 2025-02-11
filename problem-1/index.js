const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;

const n = 5; // fixed value

// Using simple loop
var sum_to_n_a = function (n) {
  if (typeof n !== "number") {
    return "Input is not a number";
  }

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (sum >= MAX_SAFE_INTEGER) {
      return "The result exceeds the maximum value.";
    }
    sum += i;
  }
  return sum;
};

// Using the Arithmetic Progression Formula
var sum_to_n_b = function (n) {
  if (typeof n !== "number") {
    return "Input is not a number";
  }

  let sum = (n * (n + 1)) / 2;

  if (sum >= MAX_SAFE_INTEGER) {
    return "The result exceeds the maximum value.";
  }
  return sum;
};

// Using reduce() method
var sum_to_n_c = function (n) {
  if (typeof n !== "number") {
    return "Input is not a number";
  }

  if (n > MAX_SAFE_INTEGER) {
    return "Input exceeds the maximum safe integer";
  }

  let sum = 0;

  try {
    sum = Array.from({ length: n }, (_, i) => i + 1).reduce((sumNum, num) => {
      if (sumNum + num > MAX_SAFE_INTEGER) {
        throw new Error("The result exceeds the maximum value.");
      }
      return sumNum + num;
    }, 0);
  } catch (error) {
    return "The result exceeds the maximum value.";
  }

  return sum;
};

console.log(sum_to_n_a(n));
console.log(sum_to_n_b(n));
console.log(sum_to_n_c(n));
