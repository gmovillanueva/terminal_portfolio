import React from 'react';

const TerminalUserInfo = () => {
  const [hostname, setHostname] = React.useState('');

  // Setting hostname
  React.useEffect(() => {
    if (typeof window !== undefined) {
      setHostname(window.location.hostname);
    }
  }, []);

  return (
    <div
      id='terminal-host-info'
      title='Terminal Host'
      aria-label='Terminal Host'
      className='mr-3 inline-block'
    >
      <span>[</span>
      <span className='text-color_02'>visitor</span>
      <span>@</span>
      <span className='text-color_13'>{hostname}</span>
      <span> ~]$</span>
    </div>
  );
};

export default TerminalUserInfo;
