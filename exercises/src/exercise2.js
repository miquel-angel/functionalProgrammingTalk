import {addWeaponDamage}  from './exercise1';
import _ from 'lodash';

export const addSwordDamage = _.partial(addWeaponDamage, 'sword');
export const addBowDamage = _.partial(addWeaponDamage, 'bow');
export const addDaggerDamage = _.partial(addWeaponDamage, 'dagger');