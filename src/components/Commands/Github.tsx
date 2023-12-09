const Github = (args: string[]) => {
  if (args.length > 0) return <p>github: {args.join(' ')} is not valid</p>;
  return (
    <div
      className='mb-3 mt-1'
      data-testid='github'
    >
      <a
        href='https://github.com/gmovillanueva'
        target='_blank'
        rel='noreferrer'
      >
        Github
      </a>
    </div>
  );
};

export default Github;
