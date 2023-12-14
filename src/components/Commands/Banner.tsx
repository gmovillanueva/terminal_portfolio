import { nameASCII } from '@configs/bannerInformation.tsx';

const Banner = (args: string[]) => {
  if (args.length > 0)
    return <p>banner: {args.join(' ')} is not a valid command.</p>;

  return (
    <div
      className='ml-5 flex flex-wrap-reverse md:mb-6'
      data-testid='banner'
    >
      <div className='md:basis-1/2'>
        <pre className='mb-6 mt-2 hidden font-semibold shadow-color_05 text-shadow md:flex'>
          {nameASCII}
        </pre>
        <div>A wild user has appeared!</div>
        <div>Welcome to my site fellow humans and bots!</div>
        <div className='my-3'>----</div>
        <div>
          Type '<span className='text-color_10'>help</span>' for list of
          available commands.
        </div>
        <div className='my-3'>----</div>
      </div>
    </div>
  );
};

export default Banner;
