import { cleanup, render } from '@testing-library/react';
import { default as userEvent } from '@testing-library/user-event';
import { afterEach } from 'vitest';
import React, { ReactElement } from 'react';

afterEach(() => {
  cleanup();
});

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: ({ children }) => children, ...options });

function eventSetup(jsx: ReactElement) {
  return {
    user: userEvent.setup(),
    ...customRender(jsx),
  };
}

export * from '@testing-library/react';
export { customRender as render };
export { eventSetup as setup };
