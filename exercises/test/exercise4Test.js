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
    describe('When I just pass one parameter', () => {
        it('Given an object should return a function', () => {
            assert.equal(true, getHabilityValueForCharacter(team) instanceof Function);
        });
        it ('If I pass 1 argument to the function received, I should receive a new function', () => {
           const functionReceived = getHabilityValueForCharacter(team);

           assert.equal(true, functionReceived('Arya') instanceof Function);
        });
        it('If I pass 2 arguments to the function passed I should obtain the result', () => {
            const functionReceived = getHabilityValueForCharacter(team);

            assert.equal(10, functionReceived('Jon', 'baseDamage'));
        });
    });

    describe('When I pass 2 parameters', () => {
        it('Given an object and a character name should return a function', () => {
            assert.equal(true, getHabilityValueForCharacter(team, 'Arya') instanceof Function);
        });

        it('If I pass 1 argument to the received function I should receive the value', () => {
            const functionReceived = getHabilityValueForCharacter(team, 'Arya');

            assert.equal(50, functionReceived('agility'));
            assert.equal(10, getHabilityValueForCharacter(team, 'Arya')('defense'));
        });
    });

    describe('When I pass all parameters', () => {
        it('Given an object and a character name and hability should return a value', () => {
            assert.equal(20, getHabilityValueForCharacter(team, 'Arya', 'baseDamage'));
        });
    });
});