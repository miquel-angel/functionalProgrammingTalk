
export const transformInRageMode = (character) => {
  let characterRange = {};

    Object.keys(character).forEach((key) => {
        characterRange[key] = Math.floor(character[key] + 0.1 * character[key]);
    });

  return characterRange;
};
