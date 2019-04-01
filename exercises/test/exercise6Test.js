import assert from 'assert';
import {getTotalDamageForCharacter} from "../src/exercise6";
import {addDaggerDamage, addSwordDamage} from "../src/exercise2";

/**
 * We'll put all pieces together :).
 * Remember curry (or curryRight), partial (or partialRight), composition ...
 */

const characterJon = {

    'baseDamage': 10,
    'agility': 30,
    'defense': 20
};

const characterArya = {
    'baseDamage': 20,
    'agility': 50,
    'defense': 10
};

const team = {
    'Jon': characterJon,
    'Arya': characterArya
};

describe('Exercise 6', () => {
    it('Given a team, member and attacks, should return the damage', () => {
        const attacks = [
            addSwordDamage,
            addDaggerDamage,
            addSwordDamage
        ];
        assert.equal(85, getTotalDamageForCharacter(team,'Arya', attacks));
    });
});