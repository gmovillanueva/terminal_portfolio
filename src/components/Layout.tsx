import React from 'react';
const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      id='terminal-layout'
      className='min-h-screen min-w-max bg-background text-xs text-foreground md:min-w-full md:text-base'
    >
      {children}
    </div>
  );
};

export default Layout;
2;
