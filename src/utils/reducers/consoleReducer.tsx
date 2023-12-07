import { CommandOutput, CommandOutputs } from '@projectTypes/index.ts';

export type AddConsoleAction = {
  type: 'add';
  payload: CommandOutput;
};

export type ClearConsoleAction = {
  type: 'clear';
};

export type ConsoleAction = AddConsoleAction | ClearConsoleAction;

export const addToConsole = (payload: CommandOutput): AddConsoleAction => {
  return { type: 'add', payload };
};

export const clearConsole = (): ClearConsoleAction => {
  return { type: 'clear' };
};

export const consoleInitialState: CommandOutputs = [];

export const consoleReducer = (
  state = consoleInitialState,
  action: ConsoleAction,
) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'clear':
      return [];
  }
};
