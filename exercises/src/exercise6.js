import fp from 'lodash/fp';
import _ from 'lodash';
import {getHabilityValueForCharacter} from "./exercise4";
import {getTotalDamage} from "./exercise5";

export const getTotalDamageForCharacter = (team, character, attacks) => {
    return fp.compose(
        _.partial(getTotalDamage, attacks),
        _.partialRight(getHabilityValueForCharacter, 'baseDamage')
    )(team, character);
};