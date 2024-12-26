function mergeSort(nums) {
  if (nums.length == 1) {
    return nums;
  }
  let mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);

  let leftSorted = mergeSort(left);
  let rightSorted = mergeSort(right);
  return merge(leftSorted, rightSorted);
}
function merge(left, right) {
  let i = 0;
  let j = 0;
  let nums = [];
  let k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      nums.push(left[i]);
      i++;
    } else {
      nums.push(right[j]);
      j++;
    }
    k++;
  }
  while (i < left.length) {
    nums.push(left[i]);
    i++;
    k++;
  }
  while (j < right.length) {
    nums.push(right[j]);
    j++;
    k++;
  }
  return nums;
}
const arr = [901, 45, 67, 86, 12, 43];
console.log(mergeSort(arr));
