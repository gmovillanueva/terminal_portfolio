import React from 'react';
import { Helper } from '@projectTypes/index.ts';

export type CommandOutput = React.ReactNode;
export type CommandOutputs = CommandOutput[];

export type Command = {
  name: string;
  description?: string;
  type?: string;
  help?: () => CommandOutput;
  run: (args: string[], helper: Helper) => CommandOutput;
};
