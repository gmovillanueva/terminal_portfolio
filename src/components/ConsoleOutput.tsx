import TerminalUserInfo from '@components/TerminalUserInfo.tsx';
import CommandOutput from '@components/CommandOutput.tsx';

const ConsoleOutput = (string: string) => {
  return (
    <div id='terminal-console-output'>
      <TerminalUserInfo /> {string}
      <br />
    </div>
  );
};

export { CommandOutput, ConsoleOutput };
