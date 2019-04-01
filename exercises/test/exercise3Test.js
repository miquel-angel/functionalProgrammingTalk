import assert from 'assert';
import {transformInRageMode} from "../src/exercise3";

/**
 * Immutability!!
 * Think in array methods, and try to solve in a single line.
 */

const character = {
    'baseDamage': 10,
    'agility': 30,
    'defense': 20
};

describe('Exercise 3', () => {
    it ('Should increase 10% all when character is in rage mode', () => {
        assert.deepEqual(
            {
                'baseDamage': 11,
                'agility': 33,
                'defense': 22
            },
            transformInRageMode(character)
        )
    });
    it ('Should not modify original character', () => {
        transformInRageMode(character);

        assert.deepEqual(
            {
                'baseDamage': 10,
                'agility': 30,
                'defense': 20
            },
            character
        );
    });
    it('We can enter in range mode many times', () => {
       assert.deepEqual(
           {
               'baseDamage': 12,
               'agility': 36,
               'defense': 24
           },
           transformInRageMode(transformInRageMode(character))
       );
    });
});