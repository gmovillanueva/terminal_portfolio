import React from 'react';

import { ConsoleAction } from '@utils/reducers';
import { HistoryAction } from '@utils/reducers';

export type Helper = {
  history: {
    history: string[];
    historyDispatch: React.Dispatch<HistoryAction>;
  };
  console: {
    consoleWindow: React.ReactNode[];
    consoleDispatch: React.Dispatch<ConsoleAction>;
  };
};
