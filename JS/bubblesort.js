function sort(a) {
    let i, len = a.length, checked;
    do {
        checked = false;
        for (i = 0; i < len; i++) {
            if (a[i] > a[i + 1]) {
                let temp = a[i];
                a[i] = a[i + 1];
                a[i + 1] = temp;
                checked = true;
            }
        }
    } while (checked);
    return a;
}
let a = [2, 4, 3, 1, 6];
console.log(sort(a));