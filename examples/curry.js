const _ = require('lodash');

function navigateForObject(object, propertyFirstLevel, propertySecondLevel) {
    return object[propertyFirstLevel][propertySecondLevel];
}

const navigateForObjectCurry = _.curry(navigateForObject);
const stark = {
    'symbol': {
        'motto': 'Winter is coming!',
        'Animal': 'Wolf'
    },
    'family': {
        'live': 'who knows',
        'dead': 'I wont make an spoiler'
    }
};

const navigateForStarkObject = navigateForObjectCurry(stark);
const navigateForStarkSymbols = navigateForStarkObject('symbol');

console.log(navigateForStarkObject('symbol', 'motto'));
console.log(navigateForStarkSymbols('Animal'));
console.log(navigateForObjectCurry(stark)('family', 'live'));