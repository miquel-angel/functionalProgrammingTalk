const values = [
  -6,
  2,
  5,
  10,
  20,
  23,
  25
];


// Recursion
function dichotomicSearch(values, start, end, search) {
    if (start > end) {
        return -1;
    }
    const half = Math.floor((start + end) / 2);

    if (values[half] === search) {
        return half;
    }

    if (search < values[half]) {
        return  dichotomicSearch(values, start, half - 1, search);
    }

    return dichotomicSearch(values, half + 1, end, search);
}

console.log(dichotomicSearch(values,0, values.length, 5));
console.log(dichotomicSearch(values,0, values.length, 23));
console.log(dichotomicSearch(values,0, values.length, 1));

// Iterative
function dichotomicSearchIterative(values, start, end, search) {
    while (true) {
        if (start > end) {
            return -1;
        }

        const half = Math.floor((start + end) / 2);

        if (values[half] === search) {
            return half;
        }

        if (search < values[half]) {
            end = half - 1;
        } else {
            start = half + 1;
        }
    }
}

console.log(dichotomicSearchIterative(values,0, values.length, 5));
console.log(dichotomicSearchIterative(values,0, values.length, 23));
console.log(dichotomicSearchIterative(values,0, values.length, 1));
