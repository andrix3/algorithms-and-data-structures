function binarySearch(arr, target) {
  if (arr.length === 0) {
    return false;
  }

  const middle = Math.floor(arr.length / 2);
  const middleValue = arr[middle];

  if (middleValue === target) {
    return true;
  }

  const searchSide =
    middleValue > target ? arr.slice(0, middle) : arr.slice(middle + 1);

  return binarySearch(searchSide, target);
}

function binarySearchIndex(arr, target) {
  if (arr.length === 0) {
    return -1;
  }

  const middle = Math.floor(arr.length / 2);
  const middleValue = arr[middle];

  if (middleValue === target) {
    return middle;
  }

  if (middleValue > target) {
    return binarySearchIndex(arr.slice(0, middle), target);
  } else {
    const idx = binarySearchIndex(arr.slice(middle + 1), target);

    if (idx === -1) {
      return -1;
    }

    return idx + middle + 1;
  }
}

export default {
  binarySearch,
  binarySearchIndex,
};