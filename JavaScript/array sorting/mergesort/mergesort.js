function merge(arr1, arr2) {
  const result = [];

  while (arr1.length && arr2.length) {
    result.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
  }

  return [...result, ...arr1, ...arr2];
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

export default mergeSort;