/**
 * Generates html whitespaces
 * @param {number} spacesTotal - The number of tabs
 * @returns {string} spacesCreated - Spaces string
 */
export const generateWhitespaces = (spacesTotal: number = 0): string => {
  let spacesCreated = '\xA0\xA0';
  for (let i = 0; i < spacesTotal; i++) {
    spacesCreated += '\xA0';
  }
  return spacesCreated;
};
