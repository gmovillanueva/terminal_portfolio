const SkillsTableHeader = () => {
  return (
    <thead>
      <tr>
        <th className='text-left'>Languages</th>
        <th className='w-6'></th>
        <th className='text-left'>Technologies</th>
        <th className='w-6'></th>
        <th className='text-left'>Frameworks</th>
      </tr>
    </thead>
  );
};

const Skills = (args: string[]) => {
  if (args.length > 0) return <p>skills: {args.join(' ')} is not valid</p>;
  return (
    <div
      data-testid='skills'
      className='ml-5'
    >
      <p>A list of some of my skills.</p>
      <table className='table-fixed'>
        <SkillsTableHeader />
        <tbody>
          <tr id='row-one'>
            <td>Javascript</td>
            <th className='w-6'></th>
            <td>React</td>
            <th className='w-6'></th>
            <td>Next.js</td>
          </tr>
          <tr id='row-two'>
            <td>TypeScript</td>
            <th className='w-6'></th>
            <td>Vite</td>
            <th className='w-6'></th>
            <td>TailwindCSS</td>
          </tr>
          <tr id='row-three'>
            <td>Python</td>
            <th className='w-6'></th>
            <td>CircleCI</td>
            <th className='w-6'></th>
            <td>React Router</td>
          </tr>
          <tr id='row-four'>
            <td>C++</td>
            <th className='w-6'></th>
            <td>Harness</td>
            <th className='w-6'></th>
            <td>Material UI</td>
          </tr>
          <tr id='row-five'>
            <td>Java</td>
            <th className='w-6'></th>
            <td>Docker</td>
            <th className='w-6'></th>
            <td>Ant Design</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
