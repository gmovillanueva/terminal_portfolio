import { useEffect } from 'react';

const GUI = (args: string[]) => {
  if (args.length > 0)
    return <p>gui: {args.join(' ')} is not a valid command.</p>;

  useEffect(() => {
    window.location.href = 'https://gui.willnewton.tech/';
  }, []);

  return (
    <div
      className='mb-3 ml-5 mt-1'
      data-testid='gui'
    ></div>
  );
};

export default GUI;
