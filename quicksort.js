function partition(array, low, high) {
	const middle = Math.floor((high + low ) / 2);
  const pivot = array[middle];  // choose middle element as pivot
  [array[middle], array[high]] = [array[high], array[middle]]; // swap middle to end
  
  let pivotIndex = high;  // store index of pivot
  let i = low;

  while (i < pivotIndex) {
    if (array[i] <= pivot) {
      ++i;
      continue;
    }

    const beforePivot = pivotIndex - 1;
    [array[i], array[beforePivot]] = [array[beforePivot], array[i]];
    --pivotIndex;
  }
  // SWAP ONCE AT END OF LOOP
  [array[pivotIndex], array[high]] = [array[high], array[pivotIndex]];

  return pivotIndex;
}

function quicksort(array, low = 0, high = array.length - 1) {
  if (low >= high) {
    return array;
  }

  const pivotIndex = partition(array, low, high);
  quicksort(array, low, pivotIndex - 1);
  quicksort(array, pivotIndex + 1, high);

  return array;
}

module.export = quicksort;
