import TerminalUserInfo from '@components/TerminalUserInfo.tsx';
import { getCommands } from '@functions/getCommands.ts';
import { Helper } from '@utils/types';

const Command = (command: string, helper: Helper) => {
  const [commandName, ...args] = command.split(' ');
  const commands = getCommands();

  if (!commands.get(commandName)) {
    console.log(commandName);
    return <>{commandName}: command not found.</>;
  }

  return <>{commands.get(commandName)?.run(args, helper)}</>;
};

const Interrupt = (command: string) => {
  return (
    <div id='terminal-command-output'>
      <TerminalUserInfo />
      {command}^C
    </div>
  );
};

Command.Interrupt = Interrupt;

export default Command;
