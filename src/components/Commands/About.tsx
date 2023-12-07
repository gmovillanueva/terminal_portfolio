import { heroASCII } from '@configs/bannerInformation.tsx';

const About = (args: string[]) => {
  if (args.length > 0) return <p>about: {args.join(' ')} is not valid</p>;
  return (
    <div
      className='mb-3 mt-1'
      data-testid='about'
    >
      <pre>{heroASCII}</pre>
      <p className='mt-2 leading-6'>
        Hello, my name is{' '}
        <span className='font-bold text-[#CD5C5C]'>William Newton</span>!
      </p>
      <p className='mt-2 leading-6'>
        I'm <span className='font-bold'>a full-stack developer</span> based in
        Texas, United States
      </p>
      <p className='mt-2 leading-6'>
        I am passionate about writing code, and solve complex problems.
      </p>
    </div>
  );
};

export default About;
