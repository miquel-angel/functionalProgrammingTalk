import {addWeaponDamage}  from './exercise1';
import _ from 'lodash';

export const addSwordDamage = _.partial(addWeaponDamage, 'sword');
export const addArchDamage = _.partial(addWeaponDamage, 'arch');
export const addDaggerDamage = _.partial(addWeaponDamage, 'dagger');