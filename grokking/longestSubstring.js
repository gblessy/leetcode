const longest_substring_with_k_distinct = function (str, k) {
  const charFrequency = {}; // {a:2,c:1}
  let windowStart = 0;
  let windowEnd = 0;
  let logestLength = 0;
  let currentLength = 0;

  while (windowEnd < str.length) {
    let quantityOfDifferentLetters = Object.keys(charFrequency).length;
    let lastLetter = str[windowEnd];
    if (charFrequency[lastLetter]) {
      charFrequency[lastLetter]++;
      currentLength++;
    } else if (quantityOfDifferentLetters < k) {
      charFrequency[lastLetter] = 1;
      currentLength++;
    } else {
      let firstLetter = str[windowStart];
      while (Object.keys(charFrequency).length > k) {
        if (charFrequency[firstLetter] === 0) {
          delete charFrequency[firstLetter];
        } else {
          charFrequency[firstLetter]--;
        }
        currentLength--;
        windowStart++;
      }
    }
    logestLength = Math.max(logestLength, currentLength);
    windowEnd++;
  }

  return logestLength;
};

console.log(longest_substring_with_k_distinct("araaci", 2), 4);
console.log(longest_substring_with_k_distinct("araaci", 1), 2);
console.log(longest_substring_with_k_distinct("cbbebi", 3), 5);
