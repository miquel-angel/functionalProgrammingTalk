
export const transformInRageMode = (character) => {
  let characterRage = {};

    Object.keys(character).forEach((key) => {
        characterRage[key] = Math.floor(character[key] + 0.1 * character[key]);
    });

  return characterRage;
};
