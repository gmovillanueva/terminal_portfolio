const WhoAmI = (args: string[]) => {
  if (args.length > 0) return <p>whoami: {args.join(' ')} is not valid</p>;
  return (
    <div
      className='mb-3 mt-1'
      data-testid='whoami'
    >
      <p className='mt-2 leading-6'>That is a good question. Who are you?</p>
    </div>
  );
};

export default WhoAmI;
