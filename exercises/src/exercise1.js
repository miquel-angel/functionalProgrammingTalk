const damagesPerWeapon = [
    {
        'name': 'sword',
        'damage': 10
    },
    {
        'name': 'dagger',
        'damage': 5
    },
    {
        'name': 'bow',
        'damage': 7
    }
];

export function addWeaponDamage(weapon, baseDamage) {
    return damagesPerWeapon
        .filter((weaponDamage) => weaponDamage.name === weapon)
        .reduce((accumulatedDamage, weaponDamage) => accumulatedDamage + weaponDamage.damage, baseDamage);
}
