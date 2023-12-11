import React from 'react';
const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='bg-background p-3 text-xs text-foreground'>
      <div
        id='terminal-layout'
        className='min-h-screen min-w-max rounded border-2 border-color_12  p-5 md:min-h-screen md:min-w-full md:text-base '
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
2;
