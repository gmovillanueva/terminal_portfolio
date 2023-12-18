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
        <p className='mt-2 leading-6'>
          Thank you for showing such keen interest in me!
        </p>
        <p className='mt-2 leading-6'>
          I am William Newton a full-stack developer, who is passionate about
          programming!
        </p>
        <p className='mt-2 leading-6'>
          I also enjoy working hard, and find a thrill on learning new things.
        </p>
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
