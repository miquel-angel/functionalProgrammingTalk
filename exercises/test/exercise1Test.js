import assert from 'assert';
import addWeaponDamage from '../src/exercise1';

/**
 * Try to use array.filter to do this exercise.
 */
describe('Exercise 1', () => {
    it('When we pass base sword should add 10', () => {
        assert.equal(15, addWeaponDamage('sword', 5));
    });

    it('When we pass base dagger should add 5', () => {
        assert.equal(10, addWeaponDamage('dagger', 5));
    });

    it('When we pass base arch add 7', () => {
        assert.equal(12, addWeaponDamage('arch', 5));
    });

    it('When we pass unknown weapon, should add 0 ', () => {
        assert.equal(5, addWeaponDamage('unknown', 5));
    });
});