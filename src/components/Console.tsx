import React from 'react';
import { useShell } from '@contexts/shellProvider.tsx';

const Console = () => {
  const { consoleWindow, executeCommand } = useShell();

  React.useEffect(() => {
    executeCommand('banner');
    return () => {
      executeCommand('clear');
    };
  }, []);

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
