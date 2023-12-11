import { themes } from '@configs/allThemes.ts';

/**
 * Check if command exists
 * @param {string} theme - Current typed command
 * @returns {string} spacesCreated - Spaces string
 */
export const themeExists = (theme: string): boolean => {
  //const commandsObject: { [index: string]: any } = commandsJSON;
  //const currentCommand = commandsObject[command];
  const themeEntries = Object.keys(themes);
  return themeEntries.indexOf(theme.split(' ')[0]) !== -1;
};
