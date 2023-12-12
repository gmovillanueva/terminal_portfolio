import React from 'react';
const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className='overflow-hidden bg-background p-3 text-xs text-foreground md:text-base'>
      <div
        id='terminal-layout'
        className='min-h-[calc(100vh-24px)] min-w-full rounded border-2 border-color_12 p-5 md:overflow-y-auto'
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
