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
        Hello fellow <span className='text-color_05'>coffee drinker</span>!
      </p>
      <p className='mt-2 leading-6'>
        Thank you for showing such keen interest in me.
      </p>
      <p className='mt-2 leading-6'>I guess you want to know more about me?</p>
      <p className='mt-2 leading-6'>Where to begin...</p>
      <br />
      <br />
      <p className='mt-2 font-bold leading-6'>
        <span className='text-3xl font-bold text-color_12'>
          In a galaxy very far far away...{' '}
        </span>
      </p>
      <br />
      <br />
      <p className='mt-2 leading-6'>
        Alright all jokes aside. As you hopefully know I am{' '}
        <span className='font-bold text-color_02'>William Newton</span> a{' '}
        <span className='font-bold text-color_07'>full-stack developer</span>{' '}
        born and raised in{' '}
        <span className='font-bold text-color_03'>Texas, United States</span>.
        No, we do not ride horses everywhere that is only saved for Sundays.
      </p>
      <p className='mt-2 leading-6'>
        I am passionate about writing code, and solve complex problems.
      </p>
    </div>
  );
};

export default About;
