const smallest_subarray_with_given_sum = function (s, arr) {
  let minimumLength = Infinity;
  let windowSum = 0;
  let windowStart = 0;
  for (let windowEnd = windowStart; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    while (windowSum >= s) {
      minimumLength = Math.min(minimumLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  if (minimumLength === Infinity) return 0;

  return minimumLength;
};

console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8]), 1);
console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2]), 2);
console.log(smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6]), 3);
