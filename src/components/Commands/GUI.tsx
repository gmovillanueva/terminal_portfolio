const GUI = (args: string[]) => {
  if (args.length > 0)
    return <p>gui: {args.join(' ')} is not a valid command.</p>;
  return (
    <div
      className='mb-3 ml-5 mt-1'
      data-testid='gui'
    >
      <p className='mt-2 leading-6'>Work in progress!</p>
    </div>
  );
};

export default GUI;
