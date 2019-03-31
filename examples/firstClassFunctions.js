function printResult(operation, value1, value2) {
    console.log(operation(value1, value2));
}

function createFunction() {
    return (value1, value2) => {
        return value1 - value2;
    };
}

const addFunction = (value1, value2) => {
  return value1 + value2;
};

printResult(addFunction, 2, 3);
printResult(createFunction(), 9, 3);
