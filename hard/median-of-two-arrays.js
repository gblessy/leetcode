/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let point1 = 0;
  let point2 = 0;

  const length1 = nums1.length;
  const length2 = nums2.length;
  const totalLength = length1 + length2;
  const shouldTakeTwoInTheMiddle = totalLength % 2 === 0;

  let mergedArray = [];

  if (!length1) {
    mergedArray = [...nums2];
  }
  if (!length2) {
    mergedArray = [...nums1];
  }

  while (point1 < length1 || point2 < length2) {
    let value = 0;

    if (nums2[point2] === undefined || nums1[point1] < nums2[point2]) {
      mergedArray.push(nums1[point1]);
      point1++;
    } else if (nums1[point1] === nums2[point2]) {
      mergedArray.push(nums1[point1]);
      point1++;
      mergedArray.push(nums2[point2]);
      point2++;
    } else {
      mergedArray.push(nums2[point2]);
      point2++;
    }
  }

  if (!shouldTakeTwoInTheMiddle) {
    return mergedArray[(totalLength + 1) / 2 - 1];
  } else {
    const middle = Math.trunc((totalLength + 1) / 2);
    return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
  }
};

console.log(findMedianSortedArrays([1, 3], [2]), 2.0);
console.log(findMedianSortedArrays([1, 2], [3, 4]), 2.5);
console.log(findMedianSortedArrays([0, 0], [0, 0]), 0);
console.log(findMedianSortedArrays([2], []), 2);
