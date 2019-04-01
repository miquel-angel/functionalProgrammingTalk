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
        'name': 'arch',
        'damage': 7
    }
];

export function addWeaponDamage(weapon, baseDamage) {
    const weaponDamage = damagesPerWeapon.filter((weaponDamage) => weaponDamage.name === weapon);

    return (weaponDamage[0])? weaponDamage[0].damage + baseDamage : baseDamage;
}
