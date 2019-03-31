import assert from 'assert';
import {addArchDamage, addDaggerDamage, addSwordDamage} from '../src/exercise2';

describe('Exercise 2', () => {
    it('When we pass base sword should add 10', () => {
        assert.equal(15, addSwordDamage(5));
    });

    it('When we pass base dagger should add 5', () => {
        assert.equal(10, addDaggerDamage(5));
    });

    it('When we pass base arch add 7', () => {
        assert.equal(12, addArchDamage(5));
    });
});