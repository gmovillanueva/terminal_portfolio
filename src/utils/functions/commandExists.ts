import * as commandsJSON from '@configs/commands.json';

/**
 * Check if command exists
 * @param {string} command - Current typed command
 * @returns {string} spacesCreated - Spaces string
 */
export const commandExists = (command: string): boolean => {
  //const commandsObject: { [index: string]: any } = commandsJSON;
  //const currentCommand = commandsObject[command];
  const commands = Object.keys(commandsJSON);
  return commands.indexOf(command.split(' ')[0]) !== -1;
};
