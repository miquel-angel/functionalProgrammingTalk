import _ from 'lodash';

export const getHabilityValueForCharacter = _.curry((team, characterName, hability) => {
    return team[characterName][hability];
});