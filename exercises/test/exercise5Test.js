import assert from 'assert';
import {getLiveRemain, getTotalDamage} from "../src/exercise5";
import {addArchDamage, addDaggerDamage, addSwordDamage} from "../src/exercise2";

/**
 * Remember the array methods :).
 */
describe('Exercise 5', () => {
    it('Given an array of attacks should return the total damage.', () => {
        const baseDamage = 10;
        const attacks = [addSwordDamage, addSwordDamage, addDaggerDamage, addArchDamage];
        assert.equal(72, getTotalDamage(attacks, baseDamage));
    });
    it ('Given an array of attacks and initial live, should return remain live.', () => {
        const baseDamage = 10;
        const attacks = [addSwordDamage, addSwordDamage, addDaggerDamage, addArchDamage];
        assert.equal(28, getLiveRemain(attacks, baseDamage, 100));
    });
});