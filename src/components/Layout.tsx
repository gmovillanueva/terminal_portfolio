import React from 'react';
const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      id='terminal-layout'
      className='min-h-screen min-w-max bg-[#1C1C1C] text-xs text-[#DDEEDD] md:min-w-full md:text-base'
    >
      {children}
    </div>
  );
};

export default Layout;
2;
