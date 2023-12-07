const Github = (args: string[]) => {
  if (args.length > 0) return <p>about: {args.join(' ')} is not valid</p>;
  return (
    <div
      className='mb-3 mt-1'
      data-testid='about'
    >
      <p className='mt-2 leading-6'>
        Hello, my name is <span className='font-bold'>William Newton</span>!
      </p>
    </div>
  );
};

export default Github;
