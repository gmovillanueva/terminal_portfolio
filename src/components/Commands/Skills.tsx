const Skills = (args: string[]) => {
  if (args.length > 0) return <p>skills: {args.join(' ')} is not valid</p>;
  return (
    <div data-testid='skills'>
      <p>List of some of my skills.</p>
      <div className='ml-5 flex'>
        <div>
          <p>Languages</p>
          <p className='ml-3'>- TypeScript</p>
          <p className='ml-3'>- Java</p>
          <p className='ml-3'>- Python</p>
          <p className='ml-3'>- C++</p>
        </div>
        <div>
          <p>Technologies</p>
          <p className='ml-3'>- React.js</p>
          <p className='ml-3'>- Next.js</p>
          <p className='ml-3'>- TailwindCSS</p>
          <p className='ml-3'>- CI/CD</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
