
export const getTotalDamage = (attacks, baseDamage) => {
    return attacks
        .map((attack) => attack(baseDamage))
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
};

export const getLiveRemain = (attacks, baseDamage, initialLive) => {
    return attacks
        .map((attack) => attack(baseDamage))
        .reduce((previousValue, currentValue) => previousValue - currentValue, initialLive);
};