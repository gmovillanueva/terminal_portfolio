import { useShell } from '@contexts/shellProvider.tsx';

const Console = () => {
  const { consoleWindow } = useShell();

  return (
    <div>
      {consoleWindow.map((command, key) => {
        return (
          <div
            id='terminal-console'
            key={key}
          >
            {command}
          </div>
        );
      })}
    </div>
  );
};

export default Console;
