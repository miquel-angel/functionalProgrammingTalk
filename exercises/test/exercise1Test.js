const assert = require('assert');
const addWeaponDamage = require('../src/exercise1');

describe('Exercise 1', () => {
    it('When we pass base sword should add 10', () => {
        assert.equal(15, addWeaponDamage('sword', 5));
    });

    it('When we pass base dagger should add 5', () => {
        assert.equal(10, addWeaponDamage('dagger', 5));
    });

    it('When we pass base sword arch add 7', () => {
        assert.equal(12, addWeaponDamage('arch', 5));
    });
});