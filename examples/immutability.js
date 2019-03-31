// Non Immutable example.
function addGreetings(names) {
    for (let i in names) {
        names[i] = `Hello ${names[i]}`;
    }

    return names;
}

let names = [
  'Jon Snow',
  'Robb Stark',
  'Arya Stark'
];

const namesWithGreeting = addGreetings(names);
console.log(namesWithGreeting, names);

// Immutable example.
function addGreetingsImmutable(names) {
    let namesWithGreetings = [];

    for (let i in names) {
        namesWithGreetings.push(`Hello ${names[i]}`);
    }

    return namesWithGreetings;
}
names = [
    'Jon Snow',
    'Robb Stark',
    'Arya Stark'
];
const namesWithGreetingImmutable = addGreetingsImmutable(names);
console.log(namesWithGreetingImmutable, names);
//Better
names = [
    'Jon Snow',
    'Robb Stark',
    'Arya Stark'
];
const namesWithGreetingMap = names.map((name) => `Hello ${name}`);
console.log(namesWithGreetingMap, names);
