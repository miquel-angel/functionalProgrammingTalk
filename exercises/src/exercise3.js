
export const transformInRageMode = (character) => {
    return Object.keys(character).map((key) => {
       return {
           key,
           value: Math.floor(character[key] * 1.1 )
       };
    }).reduce((newCharacter, hability) => {
        newCharacter[hability.key] = hability.value;
        return newCharacter;
    }, {});
};
