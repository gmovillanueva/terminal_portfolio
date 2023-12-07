import React from 'react';
import * as commandsJSON from '@configs/commands.json';

/**
 * Perform advanced tab actions
 * @returns {string[] | undefined} hints command or setState action(undefined)
 * @param command
 * @param setCommand
 */
export const handleTabAutoComplete = (
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
): string[] | undefined => {
  const commands = Object.keys(commandsJSON).filter((entry) =>
    entry.startsWith(command),
  );

  if (commands.length === 1) {
    setCommand(commands[0]);
  }
};
