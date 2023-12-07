import { commands } from '@configs/allCommands.tsx';

export const getCommands = () => {
  return new Map(Object.entries(commands));
};
