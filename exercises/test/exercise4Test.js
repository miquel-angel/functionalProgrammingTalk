import assert from 'assert';
import {getHabilityValueForCharacter} from "../src/exercise4";

/**
 * See the tests and what return in each moment.
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


describe('Exercise 4', () => {
    it('Given an object should return a function', () => {
        assert.equal(true, getHabilityValueForCharacter(team) instanceof Function);
    });

    it('Given an object and a character name should return a function', () => {
        assert.equal(true, getHabilityValueForCharacter(team, 'Arya') instanceof Function);
    });

    it('Given an object and a character name and hability should return a value', () => {
        assert.equal(20, getHabilityValueForCharacter(team, 'Arya', 'baseDamage'));
    });
});