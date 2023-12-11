import {
  forwardRef,
  KeyboardEventHandler,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import TerminalUserInfo from '@components/TerminalUserInfo.tsx';
import { useShell } from '@contexts/shellProvider.tsx';

const TerminalPrompt = forwardRef<HTMLInputElement, unknown>((_props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { executeCommand, executeEvent } = useShell();

  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputRef.current?.focus();
      },
    } as HTMLInputElement;
  });

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [executeCommand]);

  const handleSubmit = (command: string) => {
    executeCommand(command);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (!inputRef.current) return;
    const shellOutput = executeEvent(event, inputRef.current?.value ?? '');

    if (shellOutput.status !== 'Success') {
      inputRef.current.value = '';
      return;
    }

    if (event.key === 'Enter') {
      const userInput = (
        document.getElementById('terminal-prompt') as HTMLInputElement
      ).value;
      handleSubmit(userInput);
    }

    if (shellOutput.output) {
      inputRef.current.value = shellOutput.output;
    }
  };

  return (
    <div className='flex flex-row items-center space-x-2'>
      <label
        htmlFor='prompt'
        className='flex-shrink'
      >
        <TerminalUserInfo />
      </label>
      <input
        className='flex-grow border-0 bg-transparent focus:outline-none focus:ring-0 focus:ring-offset-0'
        id='terminal-prompt'
        title='Terminal Prompt'
        aria-label='Terminal Prompt'
        type='text'
        spellCheck='false'
        autoCapitalize='off'
        autoComplete='off'
        autoCorrect='off'
        autoFocus
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
});

TerminalPrompt.displayName = 'Prompt';

export default TerminalPrompt;
