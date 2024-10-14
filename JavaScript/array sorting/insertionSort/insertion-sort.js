function insertion_sort(a) {
    for(let i = 1; i < a.length; i++) {
        let k = a[i];
        let j = i - 1;

        while(a[j] > k && j >= 0) {
            a[j + 1] = a[j];
            j--;
        }

        a[j+1] = k;
    }
}