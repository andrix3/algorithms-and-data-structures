function bubbleSort(arr) {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    arr.forEach((num, idx) => {
      if (idx === arr.length - 1) {
        return;
      }

      if (num > arr[idx + 1]) {
        [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
        sorted = false;
      }
    });
  }

  return arr;
}

export default bubbleSort;
