
export const transformInRageMode = (character) => {
  let characterRage = {};

    Object.keys(character).forEach((key) => {
        characterRage[key] = Math.floor(character[key] * 1.1 );
    });

  return characterRage;
};
