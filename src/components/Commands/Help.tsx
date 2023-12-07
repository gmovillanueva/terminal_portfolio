import { getCommands } from '@functions/getCommands.ts';
import { type Command } from '@projectTypes/commandTypes.ts';

const Command = (command: Command) => {
  return (
    <div className='ml-5 flex'>
      <div>
        <p>{command.name}</p>
        <p className='ml-3'>- {command.description}</p>
      </div>
    </div>
  );
};

const Help = (args: string[]) => {
  if (args.join())
    return <span>help: {args.join(' ')}: is not help command</span>;

  const commands = Array.from(getCommands(), ([, value]) => {
    return value as Command;
  });

  return (
    <div>
      <p>Available commands:</p>
      {commands.map((command, idx) => {
        return (
          <Command
            key={idx}
            {...command}
          />
        );
      })}
      <br />
      <p>Hotkeys and other helpful features</p>
      <div className='ml-5 flex'>
        <div>
          <p>Tab</p>
          <p className='ml-3'>- Autocomplete Command</p>
        </div>
      </div>
      <div className='ml-5 flex'>
        <div>
          <p>Ctrl + l</p>
          <p className='ml-3'>- Clears the screen</p>
        </div>
      </div>
      <div className='ml-5 flex'>
        <div>
          <p>Ctrl + c</p>
          <p className='ml-3'>- Interprets Command</p>
        </div>
      </div>
    </div>
  );
};
export default Help;
