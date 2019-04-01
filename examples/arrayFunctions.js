
const values = [0, 3, -5, -20, 23, -10];
const duplicatedValues = values.map(value => value*2);
const sumValues = values.reduce((previousValue, currentValue) => currentValue + previousValue, 0);
const sumDuplicatedValuesPositive = values
    .filter((value => value > 0))
    .map(value => 2 * value)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

console.log(values.filter(value => value > 0));
console.log(duplicatedValues);
console.log(sumValues);
console.log(sumDuplicatedValuesPositive);
