function add(x) {
    return (y) => {
        return x + y;
    }
}

const add7 = add(7);

console.log(add(3)(4));
console.log(add7(4));

const _ = require('lodash');

function addTwoParameters(x,y) {
    return x + y;
}
const add4 = _.partial(addTwoParameters, 4);

console.log(add4(3));

function greetings(greeting, who) {
    return `${greeting} ${who}`
}

const greetingJon = _.partialRight(greetings, 'Jon');

console.log(greetingJon('You know nothing'));