import fp from 'lodash/fp';
import _ from 'lodash';
import {getHabilityValueForCharacter} from "./exercise4";
import {getTotalDamage} from "./exercise5";

export const getTotalDamageForCharacter = (team, character, attacks) => {
    const getBaseDamage = _.partialRight(getHabilityValueForCharacter, 'baseDamage');
    const applyAttacks = _.partial(getTotalDamage, attacks);

    return fp.compose(
        applyAttacks,
        getBaseDamage
    )(team, character);
};