import React from 'react';

import Console from '@components/Console.tsx';
import TerminalPrompt from '@components/TerminalPrompt.tsx';
import { ShellProvider } from '@contexts/shellProvider.tsx';

export const Terminal = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  React.useEffect(() => focusInput(), []);
  return (
    <main
      id='terminal-interface'
      aria-label='Terminal'
      className='h-full w-full p-2 '
      onClick={() => focusInput()}
    >
      <ShellProvider>
        <Console />
        <TerminalPrompt ref={inputRef} />
      </ShellProvider>
    </main>
  );
};
