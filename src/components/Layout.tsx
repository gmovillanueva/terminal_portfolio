import React from 'react';
const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='overflow-hidden bg-background p-3 text-xs text-foreground'>
      <div
        id='terminal-layout'
        className='min-h-[calc(100vh-24px)] min-w-max rounded border-2 border-color_12 p-5 md:min-w-full md:overflow-y-auto md:text-base'
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
