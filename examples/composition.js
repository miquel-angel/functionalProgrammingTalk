const fp = require('lodash/fp');

function addGreeting(name) {
    return `Hello ${name}`;
}

function addTitle(name) {
    return `lord commander ${name}`;
}

console.log(addGreeting(addTitle('Jon Snow')));

const addGreetingAndTitle = fp.compose(
    addGreeting,
    addTitle
);

console.log(addGreetingAndTitle('Jon Snow'));