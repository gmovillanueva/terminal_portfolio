import { KeyboardEvent, PropsWithChildren, useReducer, ReactNode } from 'react';

import { createContext } from '@functions/createContext';
import { ShellOutput, ShellStatus } from '@utils/types';
import { getCommands } from '@functions/getCommands.ts';
import { Helper } from '@utils/types';

//import { useTheme } from '@contexts/themeProvider.tsx';

import {
  historyReducer,
  historyInitialState,
  addHistory,
} from '@utils/reducers';

import {
  consoleReducer,
  consoleInitialState,
  addToConsole,
  clearConsole,
} from '@utils/reducers';

import { CommandOutput, ConsoleOutput } from '@components/ConsoleOutput.tsx';

const [useContext, Provider] = createContext<{
  history: string[];
  consoleWindow: ReactNode[];
  executeCommand: (command: string) => void;
  executeEvent: (event: KeyboardEvent, inputValue: string) => ShellOutput;
}>();

export const useShell = useContext;

export const ShellProvider = ({ children }: PropsWithChildren) => {
  const [history, historyDispatch] = useReducer(
    historyReducer,
    historyInitialState,
  );
  const [consoleWindow, consoleDispatch] = useReducer(
    consoleReducer,
    consoleInitialState,
  );

  const helper: Helper = {
    history: {
      history,
      historyDispatch,
    },
    console: {
      consoleWindow,
      consoleDispatch,
    },
  };

  const executeCommand = (command: string) => {
    historyDispatch(addHistory(command));
    consoleDispatch(addToConsole(ConsoleOutput(command)));

    if (command) {
      consoleDispatch(addToConsole(CommandOutput(command, helper)));
    }
  };

  const executeEvent = (
    event: KeyboardEvent<Element>,
    inputValue: string,
  ): ShellOutput => {
    let status: ShellStatus = 'Success';
    let output = '';

    if (event.key === 'Tab') {
      event.preventDefault();
      const commands = getCommands();

      commands.forEach((command) => {
        if (command.name.match(`^${inputValue}`)) {
          output = command.name;
          return;
        }
      });
    }

    if (event.ctrlKey) {
      if (event.key === 'l') {
        event.preventDefault();
        consoleDispatch(clearConsole());
      }

      if (event.key === 'c') {
        event.preventDefault();
        consoleDispatch(addToConsole(CommandOutput.Interrupt(inputValue)));
        status = 'Interrupted';
      }
    }

    return { output, status };
  };

  return (
    <Provider value={{ history, consoleWindow, executeCommand, executeEvent }}>
      {children}
    </Provider>
  );
};
