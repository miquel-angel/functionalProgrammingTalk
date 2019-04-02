
export const getTotalDamage = (attacks, baseDamage) => {
    return attacks
        .map((attack) => attack(baseDamage))
        .reduce((accumulatedDamage, currentDamage) => accumulatedDamage + currentDamage, 0);
};

export const getRemainingLive = (attacks, baseDamage, initialLive) => {
    return attacks
        .map((attack) => attack(baseDamage))
        .reduce((remainingLive, currentDamage) => remainingLive - currentDamage, initialLive);
};