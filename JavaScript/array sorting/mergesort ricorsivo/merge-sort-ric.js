function mergesort(a, p, r) {
  if (r - p <= 1) return;

  const q = Math.floor((p + r) / 2); // divide
  mergesort(a, p, q); // impera
  mergesort(a, q, r); // impera
  merge(a, p, q, r); // combine
}

function merge(a, p, q, r) {
  let i = p;
  let j = q;

  while (i < j && j < r) {
    if (a[i] <= a[j]) {
      i++;
    } else {
      let temp = a[j];

      for (let k = j; k > i; k--) {
        a[k] = a[k - 1];
      }
      a[i] = temp;

      i++;
      j++;
    }
  }
}

const array = [38, 27, 43, 3, 9, 82, 10];
mergesort(array, 0, array.length);
console.log(array); 
