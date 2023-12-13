import { setup } from '@/__tests__/test-utils.tsx';
import { describe, it, expect } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { Terminal } from '@components/Terminal.tsx';

describe('The Terminal components', () => {
  describe('Terminal interface', () => {
    it('should render properly', () => {
      const { getByTestId } = setup(<Terminal />);
      expect(getByTestId('terminal-interface')).toBeDefined();
    });
    it('should render banner on page load', () => {
      const { getByTestId } = setup(<Terminal />);
      expect(getByTestId('banner')).toBeDefined();
    });
    it('autofocuses the input box', () => {
      const { getByTestId } = setup(<Terminal />);
      const element = getByTestId('terminal-prompt');
      fireEvent.click(element);
      expect(element).toHaveFocus();
    });
  });
  /*let terminalInput: HTMLInputElement;
  let user: UserEvent;

  beforeEach(() => {
    const terminalSetup = setup(<Terminal />);
    user = terminalSetup.user;
    terminalInput = screen.getByTitle('Terminal Prompt');
  });

  describe('Input & Intial State', () => {
    it('Should display a banner by default', () => {
      expect(screen.getByTestId('banner').textContent).toBe('banner');
    });
  });*/
});
