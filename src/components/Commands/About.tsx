import { heroASCII } from '@configs/bannerInformation.tsx';

const About = (args: string[]) => {
  if (args.length > 0) return <p>about: {args.join(' ')} is not valid</p>;
  return (
    <div
      className='mb-3 ml-5 mt-1'
      data-testid='about'
    >
      <pre>{heroASCII}</pre>
      <p className='mt-2 leading-6'>
        Hello, fellow <span className='text-color_05'>coffee drinker</span>!
      </p>
      <p className='mt-2 leading-6'>
        Thank you for showing such keen interest in me.
      </p>
      <p className='mt-2 leading-6'>
        I am guessing you want to know more about me?
      </p>
      <p className='mt-2 leading-6'>Hmmm... Where to begin...</p>
      <br />
      <br />
      <p className='mt-2 font-bold leading-6'>
        <span className='text-3xl font-bold text-color_12 shadow-color_12 text-shadow-medium'>
          In a galaxy very far far away...{' '}
        </span>
      </p>
      <br />
      <br />
      <p className='mt-2 leading-6'>
        Alright, all jokes aside. As you probably know by now, I am{' '}
        <span className='font-bold text-color_02'>William Newton</span>, a{' '}
        <span className='font-bold text-color_07'>full-stack developer</span>{' '}
        born and raised in{' '}
        <span className='font-bold text-color_03'>Texas, United States</span>.
        No, we do not ride horses everywhere that is only reserved for Sundays.
      </p>
      <p className='mt-2 leading-6'>
        What else can I say? I am passionate about programming, solving complex
        problems, and creating random things.
      </p>
      <p className='mt-2 leading-6'>
        My interest in programming started when I took my electronics apart as a
        child (yes, I was one of those). The curiosity was intense in this one;
        as I grew older, I started asking questions about how the electronics
        knew what to do. Going down the rabbit hole led to learning about binary
        and Assembly... Since then, I have had nightmares about Assembly.
      </p>
      <p className='mt-2 leading-6'>
        After my rough encounter with Assembly, I eventually moved to C/C++ and
        finally to web development.
      </p>
      <p className='mt-2 leading-6'>
        Fast-forwarding to today, I have worked at a Tier 1 university, a
        start-up and free-lanced. My primary focus is building accessible
        products and digital experiences.
      </p>
    </div>
  );
};

export default About;
