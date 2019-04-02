import assert from 'assert';
import {addBowDamage, addDaggerDamage, addSwordDamage} from '../src/exercise2';

/**
 * Try to solve this exercise with partial.
 */
describe('Exercise 2', () => {
    it('When we pass base sword should add 10', () => {
        assert.equal(15, addSwordDamage(5));
    });

    it('When we pass base dagger should add 5', () => {
        assert.equal(10, addDaggerDamage(5));
    });

    it('When we pass base bow add 7', () => {
        assert.equal(12, addBowDamage(5));
    });
});