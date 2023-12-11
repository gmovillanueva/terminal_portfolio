import TerminalUserInfo from '@components/TerminalUserInfo.tsx';
import CommandOutput from '@components/CommandOutput.tsx';

const ConsoleOutput = (string: string) => {
  return (
    <div id='terminal-console-output'>
      <TerminalUserInfo /> <span className='text-color_10'>{string}</span>
      <br />
    </div>
  );
};

export { CommandOutput, ConsoleOutput };
